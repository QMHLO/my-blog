import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/repos">Repos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
