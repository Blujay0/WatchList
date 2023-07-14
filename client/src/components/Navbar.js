import "./Navbar.css"

export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">
      WatchList
    </a>
    <ul>
      <li className="active">
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">SignUp</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
}