const Overview = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <AppHeader />
                    <MainPropTab />
                    <VariablePropTab />
                </div>

                <div className="main-container">
                    <OverviewAppContent />
                </div>
            </div>
        )
    }
});