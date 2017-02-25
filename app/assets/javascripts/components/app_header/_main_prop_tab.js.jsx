var MainPropTab = React.createClass({
    render() {
        return(
            <div className="container">
                <div className="horizontal-menu navbar-collapse collapse">
                    {/* Properties Component */}
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/overview">
                                Overview
                            </a>
                        </li>
                        <li>
                            <a href="/task">
                                Tasks
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Documents
                            </a>
                        </li>
                        <li>
                            <a href="/budget">
                                Budget
                            </a>
                        </li>
                        <li>
                            <a href="/collaborator">
                                Collaborator
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Inventory
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
});