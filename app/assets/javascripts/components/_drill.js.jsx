const Drill = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <Header />
                </div>

                <div className="main-container">
                    <div className="sidebar-and-content-div">
                        <div className="row">
                            <div className="col-md-3 col-xs-12" id="drill-sidebar">
                                <AppContent />
                            </div>
                            <div className="col-md-9 col-xs-12" id="drill-content">
                                <div className="col-md-12 col-xs-12">
                                    <span className="drill-down-instruction">
                                        Select a criteria in the side bar and press 'Drill down' at the bottom of
                                        the bar to see which task delays this project.
                                    </span>
                                </div>
                                <div className="drill-table">
                                    <div className="row" >
                                        <div className="col-md-4 col-xs-2 " i>Project/Task</div>
                                        <div className="col-md-2 col-xs-1">Due date</div>
                                        <div className="col-md-1 col-xs-1">Status</div>
                                        <div className="col-md-1 col-xs-2">Current progress</div>
                                        <div className="col-md-1 col-xs-2">Expected progress</div>
                                        <div className="col-md-1 col-xs-2">Ahead/<br/>behind days</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee-title">assignee</div>
                                    </div>
                                </div>
                                <div className="drill-table-list">

                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Tile laying</div>
                                        <div className="col-md-2 col-xs-1">01/4/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-calendar-empty-compact" id="genicalender"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">0%</div>
                                        <div className="col-md-1 col-xs-2" id="center">0%</div>
                                        <div className="col-md-1 col-xs-2" id="center">0</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Vansolo</div>
                                    </div>
                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Block laying</div>
                                        <div className="col-md-2 col-xs-1">01/3/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-manatwork" id="geniman"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">50%</div>
                                        <div className="col-md-1 col-xs-2" id="center">60%</div>
                                        <div className="col-md-1 col-xs-2" id="center">50</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Josepth</div>
                                    </div>
                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Plumbing</div>
                                        <div className="col-md-2 col-xs-1">01/3/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-flag" id="geniflag"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">30%</div>
                                        <div className="col-md-1 col-xs-2" id="center">30%</div>
                                        <div className="col-md-1 col-xs-2" id="center">0</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Kelvin</div>
                                    </div>
                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Painting</div>
                                        <div className="col-md-2 col-xs-1">01/3/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-bell-solid-compact" id="genibell"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">60%</div>
                                        <div className="col-md-1 col-xs-2" id="center">80%</div>
                                        <div className="col-md-1 col-xs-2" id="center">20</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Desmond</div>
                                    </div>
                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Site clearing</div>
                                        <div className="col-md-2 col-xs-1">01/2/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-tick-dotted" id="genidotted"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">100%</div>
                                        <div className="col-md-1 col-xs-2" id="center">100%</div>
                                        <div className="col-md-1 col-xs-2" id="center">100</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Duncan</div>
                                    </div>
                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Foundation</div>
                                        <div className="col-md-2 col-xs-1">01/2/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-tick-solid" id="genigreen"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">100%</div>
                                        <div className="col-md-1 col-xs-2" id="center">100%</div>
                                        <div className="col-md-1 col-xs-2" id="center">10</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Gerald</div>
                                    </div>
                                    <div className="row" id="drill-row">
                                        <div className="col-md-4 col-xs-2" id="name">Drainage</div>
                                        <div className="col-md-2 col-xs-1">01/2/2017</div>
                                        <div className="col-md-1 col-xs-1" >
                                            <span className="genicon-exclamation" id="geniexcla"></span>
                                        </div>
                                        <div className="col-md-1 col-xs-2" id="center">100%</div>
                                        <div className="col-md-1 col-xs-2" id="center">100%</div>
                                        <div className="col-md-1 col-xs-2" id="center">0</div>
                                        <div className="col-md-2 col-xs-1" id="drill-assignee">
                                            <span className="genicon-person " id="drill-person"></span>Enock</div>
                                    </div>

                                </div>

                            </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
});