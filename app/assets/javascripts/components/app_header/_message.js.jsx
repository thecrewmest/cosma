var Message = React.createClass({
    render() {
        return(
            <li className="dropdown">
                <a className="dropdown-toggle" data-close-others="true" data-hover="dropdown" data-toggle="dropdown" href="#">
                    <i className="clip-bubble-3"></i>
                    <span className="badge"> 9</span>
                </a>
                <ul className="dropdown-menu posts">
                    <li>
                        <span className="dropdown-menu-title"> You have 9 messages</span>
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
                                                <span className="author">Nicole Bell</span>
                                                <span className="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
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
                                                <span className="author">Peter Clark</span>
                                                <span className="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
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
                                                <span className="author">Steven Thompson</span>
                                                <span className="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                                <span className="time">8 hrs</span>
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
                                                <span className="author">Peter Clark</span>
                                                <span className="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                                <span className="time">9 hrs</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="clearfix">
                                            <div className="thread-image">
                                                <img alt="" src="/assets/avatar-5.jpg" />
                                            </div>
                                            <div className="thread-content">
                                                <span className="author">Kenneth Ross</span>
                                                <span className="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                                <span className="time">14 hrs</span>
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