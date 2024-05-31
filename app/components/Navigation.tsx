import Link from 'next/link';
import Button from './Button';

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex items-center gap-24">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <div>
        <Link href="/login/">
          <Button
            text="Login"
            colorClass="from-purple-600 to-blue-500 hover:bg-gradient-to-bl"
          />
        </Link>
        <Link href="/registration">
          <Button
            text="Register"
            colorClass="bg-white hover:bg-gray-100"
            textColor="text-purple-600"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
