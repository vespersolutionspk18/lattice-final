'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatBotProps {
  apiKey: string;
  systemInstructions?: string;
  welcomeMessage?: string;
}

export default function ChatBot({
  apiKey,
  systemInstructions = "You are a helpful assistant for a website. Be concise, friendly, and professional.",
  welcomeMessage = "Hi! How can I help you today?"
}: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: welcomeMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<unknown>(null);
  const aiRef = useRef<unknown>(null);
  const router = useRouter();

  // Check if message should show "Book a Meeting" button
  const shouldShowBookingButton = (message: string, role: string) => {
    if (role !== 'assistant') return false;
    const keywords = ['schedule', 'meeting', 'demo', 'contact', 'book', 'appointment', 'consultation', 'pricing', 'quote'];
    return keywords.some(keyword => message.toLowerCase().includes(keyword));
  };

  // Initialize AI client and chat
  useEffect(() => {
    if (!aiRef.current && apiKey) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      aiRef.current = new GoogleGenAI({ apiKey }) as any;
    }
  }, [apiKey]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Create or reuse chat session
      if (!chatRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        chatRef.current = (aiRef.current as any).chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstructions,
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        });
      }

      // Send message and stream response
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const stream = await (chatRef.current as any).sendMessageStream({
        message: userMessage
      });

      let assistantMessage = '';
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of stream) {
        if (chunk.text) {
          assistantMessage += chunk.text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              role: 'assistant',
              content: assistantMessage
            };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-[#3b82f6] text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-lg">Chat with Cindy</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-[#2563eb] rounded-full p-1 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} gap-2`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-[#3b82f6] text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <div className="text-base prose prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
                        ul: ({children}) => <ul className="mb-2 ml-4 list-disc">{children}</ul>,
                        ol: ({children}) => <ol className="mb-2 ml-4 list-decimal">{children}</ol>,
                        li: ({children}) => <li className="mb-1">{children}</li>,
                        strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
                {message.role === 'assistant' && shouldShowBookingButton(message.content, message.role) && (
                  <button
                    onClick={() => {
                      router.push('/contact');
                      setIsOpen(false);
                    }}
                    className="bg-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2563eb] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Meeting
                  </button>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent disabled:bg-gray-100 text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#3b82f6] text-white p-2 rounded-full hover:bg-[#2563eb] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Icon Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#3b82f6] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
