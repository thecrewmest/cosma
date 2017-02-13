var App = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar-inverse navbar-fixed-top">
                    <AppHeader />
                    <AppPropertiesTab />
                    <AppContent />
                </div>
                <div className="main-container">
                    <AppProjectContent />
                </div>
            </div>
        )
    }
});