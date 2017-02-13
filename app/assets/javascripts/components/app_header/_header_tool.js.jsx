var HeaderTool = React.createClass({
    render() {
        return (
            <div className="navbar-tools">
                <ul className="nav navbar-right">
                    <PendingTask />
                    <Notification />
                    <Message />
                    <ProfileTab />
                    <SideBarToggle />
                </ul>
            </div>
        )
    }
});