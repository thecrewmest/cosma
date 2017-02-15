var DrillDown = React.createClass({
    render() {
        return(
            <div className="drill-criteria">
                {/* Criteria */}
                <div className="head">
                    <div className="row">
                        <div className="col-xs-9">
                            <h5>Criteria</h5>
                        </div>
                        <div className="col-xs-3">
                            <span className="genicon-spinner-arrows reload"></span>
                        </div>
                    </div>
                </div>

                {/*Projects*/}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    <i className="icon-arrow"></i>
                                    Projects
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                All (2 Projects)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Destiny Builders
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                ECG House Project
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*People*/}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo">
                                    <i className="icon-arrow"></i>
                                    People
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                All (1) People
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Van Solo
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company */}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse3">
                                    <i className="icon-arrow"></i>
                                    Company
                                </a>
                            </h4>
                        </div>
                        <div id="collapse3" className="panel-collapse collapse">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                All (1) Company
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                The Crew
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status*/}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse4">
                                    <i className="icon-arrow"></i>
                                    Status
                                </a>
                            </h4>
                        </div>
                        <div id="collapse4" className="panel-collapse collapse in">
                            <div className="panel-body">
                                {/* All */}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                All
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-task-hammer-compact g-sm text-warm-grey-5"></span>
                                    </div>
                                </div>

                                {/* Not Started */}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Not started
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-calendar-empty-compact g-sm text-warm-grey-4"></span>
                                    </div>
                                </div>

                                {/* In progress*/}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                In progress
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-manatwork-compact text-task-light-green g-sm"></span>
                                    </div>
                                </div>

                                {/* Behind */}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Behind
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-warning-flag-compact text-task-amber g-sm"></span>
                                    </div>
                                </div>

                                {/* Late */}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Late
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-bell-solid-compact text-task-red g-sm"></span>
                                    </div>
                                </div>

                                {/* Problem */}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Problem
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-exclamation-compact text-task-red g-sm"></span>
                                    </div>
                                </div>

                                {/* Awaiting sign-off*/}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Awaiting sign-off
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-tick-dotted text-task-blue g-sm"></span>
                                    </div>
                                </div>

                                {/*signed-of*/}
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="0" />
                                                Signed off
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="genicon-tick-solid text-task-dark-green g-sm"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tasks */}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
                                    <i className="icon-arrow"></i>
                                    Tasks
                                </a>
                            </h4>
                        </div>
                        <div id="collapse5" className="panel-collapse collapse">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control input-sm" placeholder="Search for task names, leave blank for all" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags */}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse7">
                                    <i className="icon-arrow"></i>
                                    Tags
                                </a>
                            </h4>
                        </div>
                        <div id="collapse7" className="panel-collapse collapse">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control input-sm" placeholder="Search for a tag, leave blank for all" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dates */}
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse8">
                                    <i className="icon-arrow"></i>
                                    Dates
                                </a>
                            </h4>
                        </div>
                        <div id="collapse8" className="panel-collapse collapse">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <input type="text" id="from-date" className="form-control" />
                                    </div>
                                    <div className="col-sm-2">
                                        <h5>to</h5>
                                    </div>
                                    <div className="col-sm-5">
                                        <input type="text" id="to-date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <button type="button" className="btn btn-success col-xs-12">Drill down</button>
                    </div>
                </div>
            </div>
        )
    }
});