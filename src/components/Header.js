import React from 'react';

function Header(props) {
    return (
        <div>
            {/* <!--nav strat here --> */}
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <span className="navbar-brand">React State Hook</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link">Home</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">Events</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">About</span>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <!--nav end here --> */}

        </div>
    )
}

export default Header;