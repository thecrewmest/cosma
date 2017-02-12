var AppHeader = React.createClass({
    render() {
        return(
            <div className="">
                <div className="container">
                    {/* Nav Header */}
                    <div className="navbar-header">
                        <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                            <span className="clip-list-2"></span>
                        </button>

                        <a className="navbar-brand" href="index.html">
                            BIDII
                        </a>
                    </div>
                    {/* End Nav Header */}

                    {/* Navbar tools*/}
                    <div className="navbar-tools">
                        <div className="nav nav-right">
                            <li className="dropdown">
                                <a data-hover="dropdown" className="dropdown-toggle" data-close-others="true" href="#">
                                    <i className="clip-list-5"></i>
                                    <span className="badge"> 12</span>
                                </a>
                            </li>
                            {/* Dropdown to-do*/}
                            {/* End Dropdown to-do*/}
                        </div>
                    </div>
                    {/* End Navabr tools*/}

                </div>
            </div>
        )
    }
});