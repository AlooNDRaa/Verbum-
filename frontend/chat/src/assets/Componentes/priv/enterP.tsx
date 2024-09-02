import { useState } from 'react';
import Timer from "./temporizador";
import Chat2 from './chat2';

export function EnterPas() {
  const [password, setPassword] = useState<string>("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 
  const backgroundImageUrl: string = 'url(https://i.pinimg.com/originals/a7/d4/09/a7d409d7bae019934e8511a85f8e4ff8.gif)';

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsPasswordCorrect(true);
        console.log("Ingreso correcto");
      } else {
        setIsPasswordCorrect(false);
        const result = await response.json();
        setError(result.message || 'Contraseña incorrecta'); 
        console.error("You do not have permission");
      }
      
    } catch (error) {
      setIsPasswordCorrect(false);
      setError('Error al verificar la contraseña'); 
      console.error('Error al verificar la contraseña:', error);
    }
  };
  

  return (
    <div>
      <div className="relative">
      {!isPasswordCorrect && (
        <>
          <div
            className=" h-screen absolute w-full"
            style={{ backgroundImage: backgroundImageUrl }} />
          <div className="fixed opacity-60 z-50 ml-9">
            <Timer />
          </div>
        </>
      )}
      {!isPasswordCorrect ? (
        <div className="bg-cover bg-center h-screen bg-dph opacity-60 flex justify-center items-center relative z-20">
          <form onSubmit={handlePasswordSubmit}>
            <div className="bg-gray-500 rounded w-[20rem] lg:w-[42rem] h-[12rem] lg:h-[17rem] flex flex-col justify-center p-14">
              <h1 className="text-4xl lg:text-6xl text-center mb-9 font-semibold opacity- text-[#fe0000]">
                Password required
              </h1>
              <input 
                className="border-none rounded-xl text-2xl text-black p-3 m-2 lg:p-5 bg-gray-300"
                type="password"
                name='password'
                required
                placeholder="PALĪDZĪBAAAAAAAAAAAAAAAAAA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit"
              className='font-semibold text-2xl mt-3 text-red-500'>
                ǝıp puɐ ɹǝʇuƎ
              </button>
              {error && (
                <p className="text-red-500 text-center mt-4">{error}</p> 
              )}
            </div>
          </form>
        </div>
      ) : (
        <Chat2 />
      )}
      </div>
    </div>
  );
}
