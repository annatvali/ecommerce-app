import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center gap-8 bg-gray-800 text-white p-4">
      <div>
        <a className="text-xl font-bold" href="/">
          CoMM
        </a>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
