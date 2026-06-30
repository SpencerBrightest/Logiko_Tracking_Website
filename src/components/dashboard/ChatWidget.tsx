import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Sparkles, AlertCircle } from 'lucide-react';

interface Message {
  id: number;
  sender: 'ai' | 'human-agent' | 'user' | 'system';
  text: string;
  timestamp: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm the Logiko AI Assistant. How can I help you with your shipments, tracking, billing, or services today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isHumanMode, setIsHumanMode] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isConnecting]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    const text = inputText.toLowerCase();
    setInputText('');

    if (isHumanMode) {
      // Simulate Human Agent Response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: 'human-agent',
            text: "Received! Let me look into that for you right now.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 1000);
    } else {
      // AI Response Engine
      setTimeout(() => {
        let aiReply = "I'm not sure about that. Try asking about tracking, billing, or invoices. You can also click 'Connect to Human' at the top to talk with an agent.";
        if (text.includes('track') || text.includes('where') || text.includes('lgk-')) {
          aiReply = "To track a shipment, enter your tracking code (like LGK-2025-0847) in the Track page from the navigation bar. Let me know if you need a status overview!";
        } else {
          if (text.includes('invoice') || text.includes('bill') || text.includes('pay') || text.includes('due')) {
            aiReply = "All billing history and invoice statuses (pending, paid, overdue) can be found in the Invoices tab of your dashboard.";
          } else if (text.includes('rate') || text.includes('quote') || text.includes('cost')) {
            aiReply = "You can request a customized shipping quote directly on our Contact page using the shipping quote form.";
          } else if (text.includes('address') || text.includes('warehouse')) {
            aiReply = "You can manage your pickup and delivery warehouses under the Addresses tab of the dashboard.";
          } else if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
            aiReply = "Hello! Hope you're having a great day. What logistics info can I find for you?";
          }
        }

        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: 'ai',
            text: aiReply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 800);
    }
  };

  const startHumanMode = () => {
    if (isHumanMode || isConnecting) return;
    setIsConnecting(true);

    // Simulated Hand-off
    setTimeout(() => {
      setIsConnecting(false);
      setIsHumanMode(true);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'system',
          text: "Logiko Support Agent Sarah has joined the chat.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
        {
          id: prev.length + 2,
          sender: 'human-agent',
          text: "Hi! I'm Sarah, your human support agent. I've read your conversation history. How can I assist you with your shipments today?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-body">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 relative group"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          {/* Tooltip */}
          <span className="absolute right-16 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
            Chat with Logiko
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-[380px] h-[500px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-navy p-4 flex items-center justify-between text-white border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                {isHumanMode ? <User className="w-5 h-5 text-primary" /> : <Bot className="w-5 h-5 text-primary" />}
              </div>
              <div>
                <p className="font-heading font-bold text-sm flex items-center gap-1.5">
                  {isHumanMode ? 'Live Agent: Sarah' : 'AI Assistant'}
                  {!isHumanMode && <Sparkles className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />}
                </p>
                <span className="text-xs text-gray-400 font-body">
                  {isHumanMode ? 'Typical response: Instant' : 'Powered by Logiko AI'}
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Connection Handoff Banner */}
          {!isHumanMode && !isConnecting && (
            <div className="bg-primary/5 px-4 py-2 border-b border-primary/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-navy font-semibold">
                <AlertCircle className="w-4 h-4 text-primary" />
                Need human assistance?
              </div>
              <button
                onClick={startHumanMode}
                className="bg-primary hover:bg-primary-dark text-white text-[11px] font-heading font-bold px-3 py-1 rounded-lg transition-colors"
              >
                Talk to Agent
              </button>
            </div>
          )}

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {messages.map((m) => {
              if (m.sender === 'system') {
                return (
                  <div key={m.id} className="text-center py-2">
                    <span className="bg-navy/5 text-navy text-[11px] font-semibold font-body px-3 py-1 rounded-full border border-navy/10">
                      {m.text}
                    </span>
                  </div>
                );
              }

              const isUser = m.sender === 'user';
              return (
                <div key={m.id} className={`flex gap-2.5 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
                  {/* Avatar */}
                  {!isUser && (
                    <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                      {m.sender === 'ai' ? <Bot className="w-4 h-4 text-navy" /> : <User className="w-4 h-4 text-primary" />}
                    </div>
                  )}
                  {/* Bubble */}
                  <div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      isUser
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white border border-gray-100 text-navy rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                    <span className={`block text-[10px] text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Connecting Agent Loader */}
            {isConnecting && (
              <div className="flex items-center gap-2 mr-auto max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-500 flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                  Connecting to live agent...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isConnecting ? "Connecting to agent..." : "Type your message..."}
              disabled={isConnecting}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors disabled:bg-gray-50"
            />
            <button
              type="submit"
              disabled={isConnecting || !inputText.trim()}
              className="bg-primary hover:bg-primary-dark text-white rounded-xl p-2.5 transition-colors flex items-center justify-center disabled:opacity-50 disabled:hover:bg-primary"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
