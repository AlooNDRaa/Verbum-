// import { useState, useEffect  } from 'react'
// import confetti from 'canvas-confetti'
// import { Square } from '../Componentes/game/square'
// import { TURNS } from '../Componentes/game/logic/constants'
// import { checkWinnerFrom, checkEndGame } from '../Componentes/game/logic/board'
// import { WinnerModal } from '../Componentes/game/WinnerModal'
// import { saveGameToStorage, resetGameStorage } from '../Componentes/game/logic/storage/gameStorage'
// import Navbar from '../Componentes/generals/navbarhome'
// import Footer from '../Componentes/generals/footerhome'
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');



// export function GameCYR() {
//   const [board, setBoard] = useState(() => {
//     const boardFromStorage = window.localStorage.getItem('board')
//     if (boardFromStorage) return JSON.parse(boardFromStorage)
//     return Array(9).fill(null)
//   })

//   const [turn, setTurn] = useState<TURNS>(() => {
//     const turnFromStorage = window.localStorage.getItem('turn')
//     return turnFromStorage ? (turnFromStorage as TURNS) : TURNS.X
//   })
//   const [winner, setWinner] = useState<string | boolean | null>(null)
//   const [usernames, setUsernames] = useState<string[]>([]);

//     useEffect(() => {
//       fetch('http://localhost:3000/game-users') 
//         .then(response => response.json())
//         .then(data => setUsernames(data))
//         .catch(error => console.error('Error al obtener usuarios del juego', error));
//     }, []);

//   const resetGame = () => {
//     setBoard(Array(9).fill(null))
//     setTurn(TURNS.X)
//     setWinner(null)

//     resetGameStorage()
//   }

//   const updateBoard = (index: number) => {
//     if (board[index] || winner) return
//     const newBoard = [...board]
//     newBoard[index] = turn
//     setBoard(newBoard)
//     const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
//     setTurn(newTurn)
//     saveGameToStorage({
//       board: newBoard,
//       turn: newTurn
//     })
//     const newWinner = checkWinnerFrom(newBoard)
//     if (newWinner) {
//       confetti()
//       setWinner(newWinner)
//     } else if (checkEndGame(newBoard)) {
//       setWinner(false)
//     }

//     socket.emit('updateBoard' , {
//       index: index,
//       board: newBoard,
//       turn: newTurn
//     });
//   }

//   return (
//     <main className='bg-[#101015] w-full md:max-lg:h-screen'>
//       <Navbar/>
//       <div className='board flex justify-center items-center flex-col gap-6 '>
//         <div className='son1'>
//           <h1 className='textateti text-5xl text-white mb-[1.5rem] mt-[7rem] font-bold '>Ta te ti !</h1>
//         </div>
//         <div className='son2'>
//           <button className=' border-white border-2 text-white bg-transparent w-28 p-[0.5rem] rounded-md transition duration-200 font-bold cursor-pointer hover:bg-gray-300 hover:text-gray-700' onClick={resetGame}>Empezar de nuevo</button>
//         </div>
//         <div className='son3'>
//           <section className='game grid grid-cols-3 gap-1 relative'>
//             {board.map((square: string | null, index: number) => {
//               return (
//                 <Square key={index} index={index} updateBoard={updateBoard} isSelected={false}>
//                   {square}
//                 </Square>
//               )
//             })}
//           </section>
//         </div>
//         <div className='son4'>
//           <section className='turn flex justify-center relative bottom-0 rounded-lg'>
//             <Square isSelected={turn === TURNS.X} updateBoard={() => { }} index={0}

//             >
//                {TURNS.X}
//             </Square>
//             <Square isSelected={turn === TURNS.O} updateBoard={() => { }} index={0}>
//             {TURNS.O}
//             </Square>
//           </section>
//         </div>
//         <div className='son5'>
//           <WinnerModal resetGame={resetGame} winner={winner} />
//         </div>
//       </div>
//       <Footer/>
//     </main>
//   )
// }


