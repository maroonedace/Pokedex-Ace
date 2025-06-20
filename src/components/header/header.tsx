import { FC } from "react";


const Header: FC = () => {

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold" >AceDex</h1>
    </header>
  );
};

export default Header;
