import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex bg-slate-900 items-center relative justify-between  p-5 w-full">
      <h2 className="text-white">EcommerceApp</h2>
      <ul className="text-white flex items-center justify-center space-x-3">
        <li>
            <Link href={`/`}>Home</Link>
        </li>
        <li>
            <Link href={`/`}>Men</Link>
        </li>
        <li>
            <Link href={`/`}>Women</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
