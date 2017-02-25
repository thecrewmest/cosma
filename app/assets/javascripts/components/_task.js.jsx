const Task = React.createClass({
    render() {
        function loadProgress () {
            const progress = [];
            for (let i=1; i <= 100; i++) {
                progress.push(i);
            }
            return progress;
        }

        const pItem = loadProgress();

        function addTaskModal() {
            return (
                <div id="newTask" className="modal fade" tabIndex="-1" data-width="600" style={{display: 'none'}}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Add a New Task</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <form role="form">
                                    {/* Project Name Field */}
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" ref='title' placeholder="Title" className="form-control" />
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-5">
                                            <label>Start Date</label>
                                            <input type="text" className="form-control" placeholder="Start Date" />
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <label>Finish Date</label>
                                            <input type="text" className="form-control" placeholder="Finish Date" />
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-sm-2">
                                            <label>Duration</label>
                                            <input type="text" className="form-control" disabled="disabled" placeholder="Duration" />
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <label htmlFor="assignee">
                                                    Assignee
                                                </label>
                                                <select className="assignee form-control">
                                                    <option>Select</option>
                                                    <option>Joseph</option>
                                                    <option>Kossi</option>
                                                    <option>Harrisson</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-7">
                                                <label>Tags</label>
                                                <input type="text" className="form-control"  />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label htmlFor="taskDescription">Description</label>
                                                <textarea className="form-control" placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input id="input-preview" type="file" class="file" />
                                    </div>

                                    <div>&nbsp;</div>
                                    <div className="panel-group accordion-custom" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo">
                                                        <i className="icon-arrow"></i>
                                                        Additional details
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <label htmlFor="taskBudget">Budget</label>
                                                                <input id="taskBudget" type="number" className="form-control"  />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label htmlFor="taskExtraCost">Extra cost</label>
                                                                <input id="taskExtraCost" type="number" className="form-control"  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>&nbsp;</div>
                                    <div className="panel-group accordion-custom" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse2">
                                                        <i className="icon-arrow"></i>
                                                        Progress
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse2" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <label htmlFor="assignee">
                                                                Progress
                                                            </label>
                                                            <select className="assignee form-control">
                                                                {pItem.map((item) => <option value={item}>{item + "%"}</option>)}
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <label>Report a problem</label>
                                                            <select className="form-control">
                                                                <option>No</option>
                                                                <option>Yes</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <textarea className="form-control" placeholder="add a comment to your progress"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>&nbsp;</div>
                                    <div className="panel-group accordion-custom" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse3">
                                                        <i className="icon-arrow"></i>
                                                        Periodic cost log
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapse3" className="panel-collapse collapse">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <label>From</label>
                                                        <input type="text" className="form-control" placeholder="Start Date" />
                                                        <div>&nbsp;</div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <label>To</label>
                                                        <div className="input-group input-append bootstrap-timepicker">
                                                            <input type="text" className="form-control time-picker" />
                                                            <span className="input-group-addon add-on"><i className="fa fa-clock-o" /></span>
                                                        </div>

                                                    </div>
                                                    <div className="col-sm-4">
                                                        <label>Amount Spent</label>
                                                        <input type="number" className="form-control"  />
                                                        <div>&nbsp;</div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Comment</label>
                                                    <textarea className="form-control" placeholder="add comments" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success" onClick={this.handleClick}>
                            Save
                        </button>
                    </div>
                </div>
            )
        };

        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <TaskTab />
                    </div>
                </div>

                <div className="main-container">
                    <div className="task-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover"
                                               id="sample-table-2">
                                            <thead>
                                            <tr>
                                                <th style={{width: 1 + "%"}}><input type="checkbox"/></th>
                                                <th>Tuid</th>
                                                <th style={{width: 30 + "%"}} className="col-to-export">Title</th>
                                                <th style={{width: 12 + "%"}} className="col-to-export">Start</th>
                                                <th style={{width: 5 + "%"}} className="col-to-export">Duration</th>
                                                <th style={{width: 12 + "%"}} className="col-to-export">Finish</th>
                                                <th style={{width: 5 + "%"}} className="col-to-export">Progress</th>
                                                <th style={{width: 25 + "%"}} className="col-to-export">Tags</th>
                                                <th style={{width: 10 + "%"}} className="col-to-export">Assignee</th>
                                                <th style={{width: 10 + "%"}}>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>1001</th>
                                                <td>Build site structure</td>
                                                <td>2017-01-02</td>
                                                <td>5d</td>
                                                <td>2017-01-06</td>
                                                <td>100%</td>
                                                <td>building</td>
                                                <td>Joseph</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>1002</th>
                                                <td>Paint the the outside walls</td>
                                                <td>2017-01-06</td>
                                                <td>2d</td>
                                                <td>2017-01-07</td>
                                                <td>30%</td>
                                                <td>painting</td>
                                                <td>Gerald</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>1003</th>
                                                <td>Fix the kitchen cabinet</td>
                                                <td>2017-02-01</td>
                                                <td>3d</td>
                                                <td>2017-02-03</td>
                                                <td>30%</td>
                                                <td>kitchen works</td>
                                                <td>Joseph</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>2005</th>
                                                <td>Interior designing</td>
                                                <td>2017-01-09</td>
                                                <td>1w</td>
                                                <td>2017-01-13</td>
                                                <td>15%</td>
                                                <td>design</td>
                                                <td>Solomon</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>2007</th>
                                                <td>Site Survey</td>
                                                <td>2017-01-17</td>
                                                <td>1w</td>
                                                <td>2017-01-21</td>
                                                <td>100%</td>
                                                <td>survey, structure</td>
                                                <td>Samuel</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>2009</th>
                                                <td>laying the foundation</td>
                                                <td>2017-01-23</td>
                                                <td>4d</td>
                                                <td>2017-01-26</td>
                                                <td>0%</td>
                                                <td>survey, structure</td>
                                                <td>Samuel</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>2010</th>
                                                <td>fencing of building</td>
                                                <td>2017-02-06</td>
                                                <td>2w</td>
                                                <td>2017-02-17</td>
                                                <td>1%</td>
                                                <td>building</td>
                                                <td>Samuel</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>2011</th>
                                                <td>Door frames</td>
                                                <td>2017-02-20</td>
                                                <td>1w</td>
                                                <td>2017-02-25</td>
                                                <td>1%</td>
                                                <td>carpentry</td>
                                                <td>Samuel</td>
                                                <td>
                                                    <a href="#" className="data-tb-link" title="Edit">
                                                        <span className="edit-row genicon-pencil-boxed-compact" />
                                                    </a>
                                                    <a href="#" className="data-tb-link" title="Delete">
                                                        <span style={{color: '#777'}} className="delete-row genicon-trash-stroke-compact" />
                                                    </a>
                                                </td>
                                                {/*<td><a href="javscript:void(0)" className="edit-row"> Edit </a></td>*/}
                                                {/*<td><a href="javscript:void(0)" className="delete-row"> Delete </a></td>*/}
                                            </tr>

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th><input type="checkbox"/></th>
                                                <th>Title</th>
                                                <th>Start</th>
                                                <th>Duration</th>
                                                <th>Finish</th>
                                                <th>Progress</th>
                                                <th>Tags</th>
                                                <th>Assigneee</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {addTaskModal()}
            </div>
        )
    }
});