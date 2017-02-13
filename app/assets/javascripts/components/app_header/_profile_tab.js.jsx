var ProfileTab = React.createClass({
    render() {
        return(
            <li className="dropdown current-user">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" data-close-others="true" href="#">
                    <img src="assets/avatar-1-small.jpg" className="circle-img" alt="" />
                        <span className="username">Peter Clark</span>
                        <i className="clip-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <a href="#">
                            <i className="clip-user-2"></i> &nbsp;My Profile
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="clip-phone"></i> &nbsp;0547558472
                        </a>
                        <li>
                            <a href="javascript:void(0)">
                                dynamickossi@yahoo.com
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <i className="clip-exit"></i> &nbsp;Log Out
                            </a>
                        </li>
                    </li>
                </ul>
            </li>
        )
    }
});