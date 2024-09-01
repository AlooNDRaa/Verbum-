// interface SquareProps {
//   children: React.ReactNode;
//   isSelected: boolean;
//   updateBoard: (index: number) => void;
//   index: number;
// }

// export const Square: React.FC<SquareProps> = ({ children, isSelected, updateBoard, index }) => {
//   const className = `square ${isSelected ? 'text-white bg-pink-500 bg-opacity-50' : ''} w-24 h-24 border-2 rounded-lg grid place-items-center cursor-pointer text-4xl`;

//   const handleClick = () => {
//     updateBoard(index);
//   };

//   return (
//     <div onClick={handleClick} className={className}>
//       {children}
//     </div>
//   );
// };
//  