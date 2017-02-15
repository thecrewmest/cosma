const App = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <AppHeader />
                    <AppPropertiesTab />
                    <VariablePropTab />
                </div>

                <div className="main-container">
                    {/*<AppContent />*/}
                    <Project />
                </div>
            </div>
        )
    }
});