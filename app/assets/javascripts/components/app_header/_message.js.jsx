var Message = React.createClass({
    render() {
        return(
            <li className="dropdown">
                <a className="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown" href="#">
                    <i className="clip-bubble-3" />
                    <span className="badge"> 3</span>
                </a>
                <ul className="dropdown-menu posts">
                    <li>
                        <span className="dropdown-menu-title"> You have 3 messages</span>
                    </li>
                    <li>
                        <div className="drop-down-wrapper">
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                        <div className="clearfix">
                                            <div className="thread-image">
                                                <img alt="" src="/assets/avatar-2.jpg" />
                                            </div>
                                            <div className="thread-content">
                                                <span className="author">Samuel Acheampong</span>
                                                <span className="preview">I need you to update the progress of the task</span>
                                                <span className="time"> Just Now</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="clearfix">
                                            <div className="thread-image">
                                                <img alt="" src="/assets/avatar-1.jpg" />
                                            </div>
                                            <div className="thread-content">
                                                <span className="author">Chris Osei</span>
                                                <span className="preview">Please can you send me the drawing plan for the Sandcity Hostel project.</span>
                                                <span className="time">2 mins</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="clearfix">
                                            <div className="thread-image">
                                                <img alt="" src="/assets/avatar-3.jpg" />
                                            </div>
                                            <div className="thread-content">
                                                <span className="author">Grace Agyapong</span>
                                                <span className="preview">We need more cements to finish up the site foundation.</span>
                                                <span className="time">8 hrs</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="view-all">
                        <a href="pages_messages.html">
                            See all messages <i className="fa fa-arrow-circle-o-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
        )
    }
});