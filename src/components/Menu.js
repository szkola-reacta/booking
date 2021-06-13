import Link from 'next/link';
import { forwardRef } from 'react';
import { useRouter } from 'next/router';

const NavLink = forwardRef(({ href, onClick, children }, ref) => {
  const router = useRouter();

  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      style={{ padding: 4, color: router.pathname === href ? 'red' : 'black' }}
    >
      {children}
    </a>
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
      <Link href="/posts" passHref>
        <NavLink>Posts</NavLink>
      </Link>
      <Link href="/contact" passHref>
        <NavLink>Contact</NavLink>
      </Link>
    </nav>
  );
}

export default Menu;
