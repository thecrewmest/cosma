var ProfileTab = React.createClass({
    render() {
        return(
            <li className="dropdown current-user">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" data-close-others="true" href="#">
                    <img src="/assets/photo.jpg" className="circle-img" alt="" />
                        <span className="username">John Muruiki</span>
                        <i className="clip-chevron-down" />
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <a href="/profile">
                            <i className="clip-user-2" /> &nbsp;My Profile
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="clip-phone"></i> &nbsp;0547558472
                        </a>
                         <a href="javascript:void(0)">
                             <i className="clip-archive"></i> &nbsp;The Crew
                         </a>
                        <li>
                            <a href="javascript:void(0)">
                                johnmuruiki@gmail.com
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="/login">
                                <i className="clip-exit"></i> &nbsp;Log Out
                            </a>
                        </li>
                    </li>
                </ul>
            </li>
        )
    }
});