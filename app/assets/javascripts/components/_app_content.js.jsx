var AppContent = React.createClass({
    render() {
        return(
            <div className="p-l-15">
                <div className="row">
                    {/* Left Sidebar*/}
                    <div className="col-sm-3">
                        <div className="static-side-bar">
                            <DrillDown />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-sm-9">
                        <div className="variable-content">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});