import Link from "next/link";
import styles from "./page.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.mainNavLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
