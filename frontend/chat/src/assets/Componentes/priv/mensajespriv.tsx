import React, { useState, useEffect } from "react";
import IconChat from '../../imgs/Group 5.svg'
import io from "socket.io-client";
import { Link } from "react-router-dom";

const Socket = io(import.meta.env.VITE_BACKEND_URL);

function Mensajes() {
  const [chat, setChat] = useState<string>("");
  const [chats, setChats] = useState<{ body: string; from: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!chat.trim()) {
      return console.error("Don't be null");
    }

    const newChat = {
      body: chat,
      from: "Anonimus",
    };
    setChats([...chats, newChat]);
    Socket.emit("chat", chat);
    setChat("");
  };

  useEffect(() => {
    Socket.on("chat", receiveChat);
    return () => {
      Socket.off("chat", receiveChat);
    };
  }, [chats]);

  const receiveChat = (newChat: { body: string; from: { username: string } }) => {
    const remitente = newChat.from.username || "Anonimus";
    setChats((state: { body: string; from: string }[]) => [...state, { ...newChat, from: remitente }]);
  };

  return (
    <>
      <Link to="/home">
        <button className="py-5 px-4 text-white font-bold text-sm fixed">Destroy record now</button>
      </Link>
      <div className="w-full flex items-center justify-center">
        <form onSubmit={handleSubmit} className="absolute bottom-0 flex justify-center mb-8">
          <input
            type="text"
            placeholder="يرسل"
            value={chat}
            required
            onChange={(e) => setChat(e.target.value)}
            className="text-red-300 px-5 bg-stone-950 rounded-md flex lg:w-[40rem] mr-3 h-[3rem]"
          />
          <button type="submit" className="text-[#fdf4ff]">
            <img src={IconChat} alt="iconchat" className="h-12" />
          </button>
        </form>
        <ul className="lg:w-[49rem] flex flex-col justify-center border-2 fixed  rounded-xl border-red-800 py-3 h-[490px] overflow-y-auto">
          {chats.map((chat, i) => (
            <li className={`text-white text-1xl p-8  rounded-md ${chat.from === 'Anonimus' ? ' ml-[22vw]' : ' mr-[5vw]'}`} key={i}>
              <span className="font-semibold text-red-400 block">{chat.from}</span>{" "}
              <span className="text-sm text-white">{chat.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Mensajes;
