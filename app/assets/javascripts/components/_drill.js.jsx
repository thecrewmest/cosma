const Drill = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <Header />
                </div>

                <div className="main-container">
                    <AppContent />
                </div>
            </div>
        )
    }
});