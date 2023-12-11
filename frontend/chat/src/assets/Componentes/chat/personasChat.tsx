import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface User {
    username: string;
  }

  function Person({ onUserClick }: { onUserClick: (username: string) => void }) {
    const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:5173');

    socket.on('userList', (users) => {
      setUserList(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="overflow-y-auto h-[43rem] text-white font-semibold">
        {userList.map((user, index) => (
          <div
          key={index}
          onClick={() => onUserClick(user.username)} 
          className="px-7 py-2 mt-8 hover:bg-pink-400 active:bg-[#f472b6] focus:outline-none focus:bg-[#f472b6] flex w-full gap-2">
            {/* <div className="">
              <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1697155200&semt=ais" className="w-10 h-10 object-cover rounded-full" alt="User" />
            </div> */}

            <div className="flex ">
              <div className="flex-none w-28">
                {user.username}
              </div>

              <div className="flex-none w-19">
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Person;
