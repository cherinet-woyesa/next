'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX } from 'react-icons/fi';

interface ChatbotProps {
  onAnswer: (question: string, answer: string) => void;
  step?: string;
  answers?: Record<string, string>;
  onClose?: () => void;
}

interface ChatMessage {
  type: 'bot' | 'user';
  content: string;
}

export const Chatbot = ({ onAnswer }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'bot', content: 'Hi! I can help you schedule a meeting. What type of project are you interested in?' }
  ]);
  const [currentStep, setCurrentStep] = useState('projectType');

  const handleUserResponse = (response: string) => {
    setMessages(prev => [...prev, { type: 'user', content: response }]);
    onAnswer(currentStep, response);

    // Move to next step or close
    if (currentStep === 'projectType') {
      setMessages(prev => [...prev, { type: 'bot', content: 'Great! When would you like to schedule the meeting?' }]);
      setCurrentStep('schedule');
    } else {
      setMessages(prev => [...prev, { type: 'bot', content: 'Perfect! I\'ll help you schedule that meeting.' }]);
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiMessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <h3 className="font-semibold">Schedule a Meeting</h3>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
                <FiX size={20} />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {currentStep === 'projectType' && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  {['Web Development', 'Mobile App', 'UI/UX Design', 'Consulting'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleUserResponse(option)}
                      className="p-2 text-sm bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 