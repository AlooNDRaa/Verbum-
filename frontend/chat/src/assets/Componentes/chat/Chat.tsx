import { useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Navbar from '../generals/navbarhome';
import AuthContext from '../token/auth/authprovider';

const socket: Socket = io(import.meta.env.VITE_BACKEND_URL);

interface Message {
  content: string;
  userId: number;
  username: string;
}

export function Chat() {
  const { user } = useContext(AuthContext) || {};
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    socket.on('chat message', (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') {
      return;
    }
    if (user) {
      const { id: userId } = user;
      socket.emit('chat message', { content: message, userId });
    } else {
      console.error('Usuario no autenticado');
    }
    setMessage('');
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-screen mx-auto bg-[#101015] text-white p-4 rounded-lg shadow-lg">
        <div className="flex-1 overflow-y-auto mb-4 mt-16">
          {messages.map((msg, index) => (
            <div
              key={`${index}-${msg.userId}`}
              className={`mb-2 flex ${msg.userId === user?.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-2 rounded-lg ${
                  msg.userId === user?.id ? 'bg-pink-500 text-right' : 'bg-gray-800'
                }`}
              >
                <strong className={`${msg.userId === user?.id ? 'text-white' : 'text-pink-400'}`}>
                  {msg.username}:
                </strong> {msg.content}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje"
            className="flex-1 p-3 bg-gray-900 rounded-lg border border-pink-600 text-white"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
