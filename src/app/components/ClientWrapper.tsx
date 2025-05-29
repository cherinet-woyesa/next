'use client';

import { Chatbot } from './Chatbot';

export default function ClientWrapper() {
  return (
    <Chatbot 
      onAnswer={(question, answer) => {
        console.log('Question:', question);
        console.log('Answer:', answer);
      }} 
    />
  );
}
