import Link from 'next/link';
import { forwardRef } from 'react';

const NavLink = forwardRef(({ href, onClick, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>{children}</a>
  );
});

const Menu = () => {
  return (
    <nav>
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/about" passHref>
        <NavLink>About</NavLink>
      </Link>
      <Link href="/contact" passHref>
        <NavLink>Contact</NavLink>
      </Link>
    </nav>
  );
}

export default Menu;
