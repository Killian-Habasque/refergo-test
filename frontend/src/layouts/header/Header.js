
function Navbar() {
    return (
        <nav className="nav--menu">
            <ul>
                <li><a href="">Chaise ergonomique</a></li>
                <li><a href="">Souris ergonomique</a></li>
            </ul>
        </nav>
    )
}

function Header(props) {
    return (
        <div className="header-gap">
            <header className="header">
                <p>Refergo</p>
                <Navbar />
                <button>test</button>
            </header>
        </div>
    )
}
export default Header;
