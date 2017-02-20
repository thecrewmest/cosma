const val_300 = 300;
const val_40 = 40;
const val_70 = 70;
const val_1 = 1;


const imageWidth = {
    width: `${val_300}px`,
    height: `${val_1}px`
}

const daysRemain = {
    paddingLeft: `${val_1}px`,
    fontStyle: 'bold'
}



var OverviewAppContent = React.createClass({
    render() {
        return(
            <div className="container p-l-15">
                <div className="row">
                    {/* Left Sidebar*/}
                    <div className="col-sm-3">
                        <div className="static-side-bar">
                            <div className="col-md-6" id="status-sidebar">Status</div>
                            <div className="col-md-6" id="icon-sidebar"><span className="genicon-barchart" /></div>
                        <br/>
                        <img src="images/j.png" style={imageWidth} />
                        <h4>Today:
                            25 February, 2017
                        </h4>
                        <div className="col-md-12" id="days_remaining_div"><h3 className="days">125</h3>
                            <h4 style={daysRemain}>Days remaining</h4>

                            .................................

                            <div className="col-md-12" id="end_date">01-Feb-2017</div>
                            <h5 id="scheduled_end_date">Scheduled end date</h5>

                            .................................


                        </div>
                        <div className="col-md-12" id="percentage_comp_div">
                            <div><h5 className="completed">70% Completed</h5></div>
                            <div className="progressbar_div">
                                <div className=" progress progress-sm progress-bas-success" role="progressbar" aria-valuenow="40"
                                     aria-valuemin="0" aria-valuemax="100%" style={{width: val_70 + '%'}}>
                                    <span className="sr-only"> 40% complete </span>
                                </div>
                            </div>
                            <p id="project_stats"><span className="genicon-manatwork-compact text-task-lightgreen"></span>In progress: 4
                                tasks(20%)</p>
                            <div className="progressbar_div">
                                <div className=" progress progress-sm progress-bas-success" role="progressbar" aria-valuenow="40"
                                     aria-valuemin="0" aria-valuemax="100%" style={{width: val_40 + '%'}}>
                                    <span className="sr-only"> 40% complete accesskey="(success)"></span>
                                </div>

                            </div>
                            <p id="project_stats"><span className="genicon-warning-flag-compact text-task-amber"></span>Behubd schedule:
                                1 task(10%)</p>
                            <div className="progressbar_div">

                                <div className=" progress progress-sm progress-bas-success" role="progressbar" aria-valuenow="40"
                                     aria-valuemin="0" aria-valuemax="100%" style={{width: val_40 + '%'}}>
                                    <span className="sr-only"> 40% complete accesskey="(success)"></span>
                                </div>

                            </div>
                            <p id="project_stats"><span className="genicon-exclamation-compact text-task-red"></span>Late/problematic: 1
                                tasks(10%)</p>

                        </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-sm-9">
                        <div className="variable-content">
                            <div className="col-md-12 col-xs-12" id="tasks-ongoing"><span className="genicon-task-hammer"></span>4 Ongoing</div>


                            <div className="task-list-parent-div">
                                <div className="row">
                                    <div id="tittle" className="col-md-2 col-xs-2">Recent reports</div>
                                    <div id="tittle" className="col-md-3 col-xs-3">Task name</div>
                                    <div id="tittle" className="col-md-2 col-xs-2">Progress</div>
                                    <div id="tittle" className="col-md-3 col-xs-3">Status</div>
                                    <div id="tittle" className="col-md-2 col-xs-2">Assigned to</div>
                                </div>

                                <div className="row">
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2"><span
                                        className="genicon-tick-boxed-compact"></span><span style={{color: 'red'}}>A day ago</span></div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">Castrate Tump</div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2"><span className="genicon-manatwork"></span>
                                        40%
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">In progress, due
                                        in a week
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <div className="col-md-3" id="user-icon"><span
                                            className="genicon-person"></span></div>
                                        <div className="col-md-9" id="user-name">  Donal T...</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2"><span
                                        className="genicon-tick-boxed-compact"></span><span style="color: red;">A day ago</span></div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">Slap Trump</div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2"><span className="genicon-manatwork"></span>
                                        60%
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">In progress, due
                                        in a week
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2"><span
                                        className="user-icon-img"></span>
                                        <div className="col-md-3" id="user-icon"> <span
                                            className="genicon-person"></span></div>
                                        <div className="col-md-9" id="user-name">  Donal T...</div>
                                    </div>
                                </div>
                            </div>


                            <div className="completed-tasks">
                                <div className="row">
                                    <div id="tittle-competed-task" className="col-md-4 col-xs-2">Task Name</div>
                                    <div id="tittle-competed-task" className="col-md-2 col-xs-3">Started</div>
                                    <div id="tittle-competed-task" className="col-md-2 col-xs-2">Finished</div>
                                    <div id="tittle-competed-task" className="col-md-2 col-xs-3">Span</div>
                                    <div id="tittle-competed-task" className="col-md-2 col-xs-2">Assignee</div>
                                </div>
                                <div className="row">
                                    <div id="completed-task-table" className="col-md-4 col-xs-2">Castrate Trump</div>
                                    <div id="completed-task-table" className="col-md-2 col-xs-3"><span
                                        className="genicon-calendar-date"></span>3/June/2016
                                    </div>
                                    <div id="completed-task-table" className="col-md-2 col-xs-2"><span className="genicon-calendar-date"></span>
                                        2/Jan/2017
                                    </div>
                                    <div id="completed-task-table" className="col-md-2 col-xs-3">58 days</div>
                                    <div id="completed-task-table" className="col-md-2 col-xs-2">
                                        <div className="col-md-3" id="user-icon"> <span
                                            className="genicon-person"></span></div>
                                        <div className="col-md-9" id="user-name">  Donal T...</div>
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