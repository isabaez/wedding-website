import Link from "next/link";
import "@styles/navigation.scss";

export default function Navigation() {

  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__item">
          <Link href="/information">Information</Link>
        </li>
        <li className="Navigation__item">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="Navigation__item">
          <Link href="/registry">Registry</Link>
        </li>
      </ul>
    </nav>
  )
}