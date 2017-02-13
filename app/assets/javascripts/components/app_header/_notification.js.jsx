var Notification = React.createClass({
    render() {
        return(
            <li className="dropdown">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" data-close-others="true" href="#">
                    <i className="clip-notification-2"></i>
                    <span className="badge"> 11</span>
                </a>
                <ul className="dropdown-menu notifications">
                    <li>
                        <span className="dropdown-menu-title"> You have 11 notifications</span>
                    </li>
                    <li>
                        <div className="drop-down-wrapper">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-primary"><i className="fa fa-user"></i></span>
                                        <span className="message"> New user registration</span>
                                        <span className="time"> 1 min</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-comment"></i></span>
                                        <span className="message"> New comment</span>
                                        <span className="time"> 7 min</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-comment"></i></span>
                                        <span className="message"> New comment</span>
                                        <span className="time"> 8 min</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-comment"></i></span>
                                        <span className="message"> New comment</span>
                                        <span className="time"> 16 min</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-primary"><i className="fa fa-user"></i></span>
                                        <span className="message"> New user registration</span>
                                        <span className="time"> 36 min</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-warning"><i className="fa fa-shopping-cart"></i></span>
                                        <span className="message"> 2 items sold</span>
                                        <span className="time"> 1 hour</span>
                                    </a>
                                </li>
                                <li className="warning">
                                    <a href="javascript:void(0)">
                                        <span className="label label-danger"><i className="fa fa-user"></i></span>
                                        <span className="message"> User deleted account</span>
                                        <span className="time"> 2 hour</span>
                                    </a>
                                </li>
                                <li className="warning">
                                    <a href="javascript:void(0)">
                                        <span className="label label-danger"><i className="fa fa-shopping-cart"></i></span>
                                        <span className="message"> Transaction was canceled</span>
                                        <span className="time"> 6 hour</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-comment"></i></span>
                                        <span className="message"> New comment</span>
                                        <span className="time"> yesterday</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-primary"><i className="fa fa-user"></i></span>
                                        <span className="message"> New user registration</span>
                                        <span className="time"> yesterday</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-primary"><i className="fa fa-user"></i></span>
                                        <span className="message"> New user registration</span>
                                        <span className="time"> yesterday</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-comment"></i></span>
                                        <span className="message"> New comment</span>
                                        <span className="time"> yesterday</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-comment"></i></span>
                                        <span className="message"> New comment</span>
                                        <span className="time"> yesterday</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="view-all">
                        <a href="javascript:void(0)">
                            See all notifications <i className="fa fa-arrow-circle-o-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
});