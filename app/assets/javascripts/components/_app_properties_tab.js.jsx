var AppPropertiesTab = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="horizontal-menu navbar-collapse collapse">
                    {/* Properties Component */}
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/dashboard">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/drilldown">
                                Drill down
                            </a>
                        </li>
                        <li>
                            <a href="/task_sheet">
                                Task sheet
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});