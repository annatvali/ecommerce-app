'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { isAuth } from '@/app/lib/isAuth';
import { useAuth } from '@/app/lib/AuthContext';
import { useEffect } from 'react';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navigation = ({
  isOpen,
  onLinkClick,
}: {
  isOpen: boolean;
  onLinkClick: () => void;
}): JSX.Element => {
  const router = useRouter();
  const { isAuthenticated, login, logout } = useAuth();

  const handleLoginClick = async () => {
    try {
      const authStatus = await isAuth();
      if (authStatus) {
        login();
        router.push('/catalog');
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error during auth check:', error);
      router.push('/login');
    }
    onLinkClick();
  };

  const handleRegisterClick = async () => {
    try {
      const authStatus = await isAuth();
      if (authStatus) {
        login();
        router.push('/catalog');
      } else {
        router.push('/registration');
      }
    } catch (error) {
      console.error('Error during auth check:', error);
      router.push('/registration');
    }
    onLinkClick();
  };

  const handleLogoutClick = () => {
    logout();
    router.push('/');
    onLinkClick();
  };

  useEffect(() => {}, [isAuthenticated]);

  return (
    <nav
      className={`${
        isOpen ? 'flex' : 'hidden'
      } flex-col items-center w-full md:w-auto md:flex md:flex-row md:items-center md:gap-4 bg-gray-800 md:bg-transparent absolute md:relative top-0 left-0 md:top-auto md:left-auto p-4 md:p-0 mt-14 md:mt-0 z-10`}
    >
      <ul
        className={`flex flex-col md:flex-row md:space-x-4 items-center space-y-4 md:space-y-0 mr-8 ${isOpen ? 'mr-0' : 'mr-8'}`}
      >
        <li>
          <Link
            href="/"
            className="hover:underline active:bg-blue-600"
            onClick={onLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className="hover:underline active:bg-blue-600"
            onClick={onLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className="hover:underline active:bg-blue-600"
            onClick={onLinkClick}
          >
            Catalog
          </Link>
        </li>
        <li>
          <Link
            href="/basket"
            className="hover:underline active:bg-blue-600 flex items-center"
            onClick={onLinkClick}
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            Basket
          </Link>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row md:space-x-4 items-center space-y-4 md:space-y-0 mt-4 md:mt-0">
        {isAuthenticated ? (
          <>
            <Link href="/profile">
              <div className="hover:text-blue-100" onClick={onLinkClick}>
                <UserIcon className="h-6 w-6" />
              </div>
            </Link>
            <Button
              href={'/'}
              text="Logout"
              colorClass="from-red-600 to-red-500 hover:bg-gradient-to-bl"
              onClick={handleLogoutClick}
            />
          </>
        ) : (
          <>
            <Button
              href={'/login'}
              text="Login"
              colorClass="from-purple-600 to-blue-500 hover:bg-gradient-to-bl"
              onClick={handleLoginClick}
            />
            <Button
              href={'/register'}
              text="Register"
              colorClass="bg-white hover:bg-gray-100"
              textColor="text-purple-600"
              onClick={handleRegisterClick}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
