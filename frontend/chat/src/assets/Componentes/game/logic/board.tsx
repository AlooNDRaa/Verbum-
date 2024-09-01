// import { WINNER_COMBOS } from '../logic/constants'

// export const checkWinnerFrom = (boardToCheck: any[]): string | null => {
//   for (const combo of WINNER_COMBOS) {
//     const [a, b, c] = combo
//     if (
//       boardToCheck[a] &&
//       boardToCheck[a] === boardToCheck[b] &&
//       boardToCheck[a] === boardToCheck[c]
//     ) {
//       return boardToCheck[a]
//     }
//   }
//   return null
// }

// export const checkEndGame = (newBoard: any[]): boolean => {
//   return newBoard.every((square) => square !== null)
// }