const Overview = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                    </div>
                </div>



                {/*CONTAINS SIDEBAR AND CONTENT*/}
                <div className="contianer-sidebar-content">
                    {/*bar contianing downloads*/}
                    <div className="row">
                        <div  className="col-md-12" id="overview-topbar">
                            <a className="download-report-pdf" href="#">
                                <span className="genicon-file-pdf"></span>Download PDF
                            </a>
                            <a className="download-report-word"  href="#">
                                <span className="genicon-file-word"></span>Download Word
                            </a>
                            <span className="project-title">Sandcity Hostel</span>


                        </div>
                        {/*end of downloads bar*/}
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-xs-12" id="overview-sidebar">
                            <div className="col-md-6 col-xs-12" id ="status-sidebar">Status</div>
                            <div className="col-md-6 col-xs-12" id="icon-sidebar"><span className="genicon-barchart" /></div>

                            <div className="col-md-12 col-xs-12" id="days_remaining_div">
                                <h3 className="days">25</h3>
                                <h4>Days remaining</h4>

                                .................................

                                <div className="col-md-12 " id="end_date">01-April-2017</div>
                                <h5 id="scheduled_end_date">Scheduled end date</h5>

                                .................................

                            </div>


                            <div className="col-md-12" id="percentage_comp_div">
                                <div><h5 className="completed">50% Completed</h5></div>
                                <div className="progressbar_div">

                                    <div className="progress progress-sm progress-bar-success" role="progressbar"
                                         aria-valuenow="80" id="pbar" aria-valuemin="0" aria-valuemax="80%" style={{width: 50 +'%'}}>
                                        <span className="sr-only" > 80% complete accesskey="(success)"></span>
                                    </div>
                                </div>

                                <p id="project_stats"><span className="genicon-manatwork-compact text-task-lightgreen">
                                     </span>In progress: (4 tasks Ongoing, 50%)</p>

                                <div className="progressbar_div" >
                                    <div className=" progress progress-sm progress-bar-warning" role="progressbar" id="pbar"
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100%" style={{width: 0 +'%'}} >
                                        <span className="sr-only" > 60% complete accesskey="(success)"></span>
                                    </div>
                                </div>

                                <p id="project_stats"><span className="genicon-warning-flag-compact genicon-timer">
                                     </span>Behind: (0 tasks, 0%)</p>

                                <div className="progressbar_div" >
                                    <div className=" progress progress-sm progress-bar-danger" role="progressbar" id="pbar"
                                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100%" style={{width: 0 +'%'}} >
                                        <span className="sr-only" > 40% complete accesskey="(success)"></span>
                                    </div>
                                </div>

                                <p id="project_stats"><span className="genicon-exclamation-compact text-task-red">
                                </span>Late/problematic: (0 tasks, 0%)</p>

                            </div>

                        </div>

                        {/*overview content side begins */}
                        <div className="col-md-9 col-xs-12" id="overview-content">
                            <div className="col-md-12 col-xs-12" id="tasks-ongoing">
                                <span className="genicon-task-hammer"></span>4 Ongoing</div>

                            {/*Task tables*/}
                            <div className="task-list-parent-div">
                                <div className="row">
                                    <div id="tittle" className="col-md-2 col-xs-2">Recent reports</div>
                                    <div id="tittle" className="col-md-3 col-xs-3">Task name</div>
                                    <div id="tittle" className="col-md-2 col-xs-2">Progress</div>
                                    <div id="tittle" className="col-md-3 col-xs-3">Status</div>
                                    <div id="tittle" className="col-md-2 col-xs-2" >Assigned to</div>
                                </div>

                                <div className="row">
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-tick-boxed-compact">
                                        </span><span style={{color: 'red'}}>A day ago</span></div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        Roofing
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-manatwork" id="maw"></span>
                                        90%
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        In progress, due in a week
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2" >
                                        <div className="col-md-3" id="user-icon">
                                            <span className="genicon-person" id="person"></span>
                                        </div>
                                        <div  className="col-md-9" id="user-name">Joseph</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-tick-boxed-compact">
                                        </span><span style={{color: 'red'}}>2 days ago</span></div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        Plastering
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-manatwork"></span>
                                        70%
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        In progress, due in 5 days
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2" >
                                        <div className="col-md-3" id="user-icon">
                                            <span className="genicon-person"></span></div>
                                        <div  className="col-md-9" id="user-name">
                                            Gerald
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-tick-boxed-compact">
                                        </span><span style={{color: 'red'}}>A day ago</span></div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        Plumbing
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-manatwork"></span>
                                        70%
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        In progress, due in 12 days
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2" >
                                        <div className="col-md-3" id="user-icon">
                                            <span className="genicon-person"></span></div>
                                        <div  className="col-md-9" id="user-name">
                                            Vansolo
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-tick-boxed-compact">
                                        </span><span style={{color: 'red'}}>A day ago</span></div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        Framing
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2">
                                        <span className="genicon-manatwork"></span>
                                        90%
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-3 col-xs-3">
                                        In progress, due in 2 days
                                    </div>
                                    <div id="ongoing-task-table" className="col-md-2 col-xs-2" >
                                        <div className="col-md-3" id="user-icon">
                                            <span className="genicon-person"></span></div>
                                        <div  className="col-md-9" id="user-name">
                                            Duncan
                                        </div>
                                    </div>
                                </div>




                                {/*Completed tasks table*/}
                                <div className="completed-tasks">
                                    <p className="tc" ><span class="genicon-task-hammer"></span>
                                        <span className="genicon-calendar-date"></span>4 Completed</p>
                                    <div className="row">
                                        <div id="tittle-competed-task" className="col-md-4 col-xs-2">Task Name</div>
                                        <div id="tittle-competed-task" className="col-md-2 col-xs-3">Started</div>
                                        <div id="tittle-competed-task" className="col-md-2 col-xs-2">Finished</div>
                                        <div id="tittle-competed-task" className="col-md-2 col-xs-3">Span</div>
                                        <div id="tittle-competed-task" className="col-md-2 col-xs-2" >Assigned</div>
                                    </div>
                                    <div className="row">
                                        <div id="completed-task-table" className="col-md-4 col-xs-2">
                                            Foundation digging
                                        </div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-3">
                                            <span className="genicon-calendar-date"></span>1/Jan/2016
                                        </div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-2">
                                            <span className="genicon-calendar-date"></span>15/Jan/2016</div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-3">14 days</div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-2" >
                                            <div className="col-md-3" id="user-icon"> <span className="genicon-person"></span></div>
                                            <div  className="col-md-9" id="user-name">Joseph</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div id="completed-task-table" className="col-md-4 col-xs-2">
                                            Fencing
                                        </div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-3">
                                            <span className="genicon-calendar-date"></span>3/Feb/2016
                                        </div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-2">
                                            <span className="genicon-calendar-date"></span>21/Feb/2016</div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-3">18days</div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-2" >
                                            <div className="col-md-3" id="user-icon"> <span className="genicon-person"></span></div>
                                            <div  className="col-md-9" id="user-name">Eric</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div id="completed-task-table" className="col-md-4 col-xs-2">
                                            Block laying
                                        </div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-3">
                                            <span className="genicon-calendar-date"></span>1/Jan/2016
                                        </div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-2">
                                            <span className="genicon-calendar-date"></span>1/March/2016</div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-3">2 months</div>
                                        <div id="completed-task-table" className="col-md-2 col-xs-2" >
                                            <div className="col-md-3" id="user-icon"> <span className="genicon-person"></span></div>
                                            <div  className="col-md-9" id="user-name">Team Crew</div>
                                        </div>
                                    </div>


                                </div>
                                {/*end*/}

                            </div>
                            {/*Task tables end*/}

                            </div>
                        {/*overview content side ends*/}
                    </div>
                </div>
            </div>
        )
    }
});