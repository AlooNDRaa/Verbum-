// import { Square } from './square'

// interface WinnerModalProps {
//   winner: string | boolean | null;
//   resetGame: () => void;
// }

// export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
// if (winner === null) return null;
  
//   const winnerText = winner === false ? 'Empate' : `Ganó: ${winner}`;
  
  
//   return (
//     <section className='winner fixed inset-0 grid place-items-center bg-black bg-opacity-70 m-[2rem]'>
//       <div className='text bg-black text-white  border-2  flex flex-col justify-center items-center w-[20rem] h-[20rem] rounded-lg'>
//         <h2>{winnerText}</h2>

//         <header className='win auto w-fit-content  border-white rounded-10 flex '>
//           {winner && <Square
//               isSelected={false}
//               updateBoard={() => {}}
//               index={0}
//             >
//               {winner}
//             </Square>}
//         </header>

//         <footer>
//           <button onClick={resetGame} className='border-white border-2 text-white bg-transparent w-28 p-[0.5rem] rounded-md transition duration-200 font-bold cursor-pointer hover:bg-gray-300 hover:text-gray-700 mt-[1rem]'>Empezar de nuevo</button>
//         </footer>
//       </div>
//     </section>
//   );
// }
//  