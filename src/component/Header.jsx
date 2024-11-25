import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <img src={logo} alt="fylo logo"  />
        </div>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#Team">Team</a></li>
          <li><a href="#Sign-in">Sign in</a></li>
        </ul>
      </nav>
    </header>
  )
}
