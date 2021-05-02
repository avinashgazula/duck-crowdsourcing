export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Duck Crowdsourcing</a>
                <div className="" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Submit a Response <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/viewdata">View Responses</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <br />
            <br />
        </div>

    )
}
