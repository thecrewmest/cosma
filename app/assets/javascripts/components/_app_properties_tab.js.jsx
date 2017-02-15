var AppPropertiesTab = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="horizontal-menu navbar-collapse collapse">
                    {/* Properties Component */}
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Drill down
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Task sheet
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});