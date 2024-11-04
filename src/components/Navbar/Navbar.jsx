// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // סגנונות מותאמים אישית

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.logo}>
        <Link href="/">
          <a>My Store</a>
        </Link>
      </div> */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Jewelery">Jewelery</Link>
        </li>
        <li>
          <Link href="/Books">Books</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
