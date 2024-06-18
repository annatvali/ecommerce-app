import '../globals.css';
import { FC } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
  colorClass: string;
  textColor?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  href = '/',
  text,
  colorClass,
  textColor = 'text-white',
  onClick,
}) => {
  return (
    <Link
      href={{ href }}
      type="button"
      onClick={onClick}
      className={`${textColor} bg-gradient-to-r ${colorClass} hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
    >
      {text}
    </Link>
  );
};

export default Button;
