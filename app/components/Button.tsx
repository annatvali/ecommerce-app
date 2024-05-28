import '../globals.css';
import { FC } from 'react';

interface ButtonProps {
  text: string;
  colorClass: string;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  colorClass,
  textColor = 'text-white',
}) => {
  return (
    <button
      type="button"
      className={`${textColor} bg-gradient-to-r ${colorClass} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
    >
      {text}
    </button>
  );
};

export default Button;
