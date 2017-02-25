var Notification = React.createClass({
    render() {
        return(
            <li className="dropdown">
                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" data-close-others="true" href="#">
                    <i className="clip-notification-2"></i>
                    <span className="badge"> 4</span>
                </a>
                <ul className="dropdown-menu notifications">
                    <li>
                        <span className="dropdown-menu-title"> You have 4 notifications</span>
                    </li>
                    <li>
                        <div className="drop-down-wrapper">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-primary"><i className="fa fa-user"></i></span>
                                        <span className="message">Samuel has been added to the project</span>
                                        <span className="time"> 1 min</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-warning"><i className="fa fa-tasks"></i></span>
                                        <span className="message">Task 4010 is due tommorrow</span>
                                        <span className="time"> 8 min</span>
                                    </a>
                                </li>

                                <li className="warning">
                                    <a href="javascript:void(0)">
                                        <span className="label label-danger"><i className="fa fa-user"></i></span>
                                        <span className="message"> Lynda was removed from project</span>
                                        <span className="time"> 2 hour</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="label label-success"><i className="fa fa-tasks" /></span>
                                        <span className="message"> Task 1201 has been signed off</span>
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