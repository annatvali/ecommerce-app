'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { isAuth } from '@/app/lib/isAuth';
import { useAuth } from '@/app/lib/AuthContext';
import { useEffect } from 'react';

const Navigation = (): JSX.Element => {
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
  };

  const handleLogoutClick = () => {
    logout();
    router.push('/');
  };

  useEffect(() => {}, [isAuthenticated]);

  return (
    <nav className="flex items-center gap-24">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/catalog" className="hover:underline">
            Catalog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
      </ul>
      <div>
        {isAuthenticated ? (
          <Button
            href={'/'}
            text="Logout"
            colorClass="from-red-600 to-red-500 hover:bg-gradient-to-bl"
            onClick={handleLogoutClick}
          />
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
