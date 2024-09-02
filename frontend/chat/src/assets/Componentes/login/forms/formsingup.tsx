import { useState } from 'react';

export default function Form2() {

  
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  

  const handleCreateUser = async () => {
    if (userData.username.trim() === '' || userData.email.trim() === '' || userData.password.trim() === '') {
      console.error('Por favor completa todos los campos.');
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/newuser`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Registro exitoso');
        const data = await response.json();
        localStorage.setItem('users', JSON.stringify(data));
      } else {
        console.error('Error en el registro');
      }
 } catch (error) {
    console.error('Error de red', error);
 }
  };
  

  return (
    <div>
      <div className="text-white">
        <h1 className="text-5xl font-semibold text-[#ffff]">
          Welcome User
        </h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome User! Please enter your details
        </p>
        <div className="mt-8">
          <div className="mb-2">
            <label className="flex mb-3 text-lg font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-4 mt-1 bg-transparent"
              placeholder="Enter your name"
              required
              />
            
          </div>
          <div>
            <label className="flex mb-3 text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-4 mt-1 bg-transparent"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div>
            <label className="flex my-3 text-lg font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
          </div>
          <div className="mt-4 flex flex-col gap-y-4">
            <button
              className="bg-pink-600 text-white text-lg font-bold rounded-xl py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
              onClick={handleCreateUser}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


