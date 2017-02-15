const backImagePath = '/assets/project_default_image.jpeg';
const progressWidth = 40;
const backImage = {
    backgroundImage: `url(${backImagePath})`
};

const newProjectModalStyle = {
    display: 'none'
}

const style1 = {
    borderTop: '5px solid lightblue'
}

const progWidth = {
    width: `${progressWidth}%`
}

var Project = React.createClass({
    render() {
        return (
            <div className="container p-l-100">
                {/* Create Project Dialog */}
                <div id="newProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Add a New project</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <form role="form" className="horizontal">
                                    {/* Project Name Field */}
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Project Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" placeholder="Project name" className="form-control" />
                                        </div>
                                    </div>
                                    <br /><br /><br />
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Cover Image</label>
                                        <div className="col-sm-8">
                                            <input id="input-preview" type="file" className="file" />
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
                        <button type="button" className="btn btn-success">
                            Save
                        </button>
                    </div>
                </div>

                {/* Edit Project */}
                <div id="editProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Edit Project</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <form role="form" className="form-horizontal">
                                    {/* Project Name Field */}
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Project Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" placeholder="Project name" value="The Crew" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Cover Image</label>
                                        <div className="col-sm-8">
                                            <input id="input-preview" type="file" className="file" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Uploaded Files:</label>
                                        <div className="col-sm-9">
                                            <p><strong>0</strong> of your <strong>50</strong> file allowance (Upgrade to increase)</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Admin Actions:</label>
                                        <div className="col-sm-9">
                                            <a className="btn btn-light-grey input-sm" data-toggle="modal" href="#exportProject">Export project</a>&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Owner Actions:</label>
                                        <div className="col-sm-9">
                                            <a className="btn btn-light-grey" data-toggle="modal" href="#deleteProject">Delete project</a>&nbsp;&nbsp;
                                            <a className="btn btn-light-grey">Archive project</a>
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
                        <button type="button" className="btn btn-success">
                            Save
                        </button>
                    </div>
                </div>

                {/* Delete Project*/}
                <div id="deleteProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Are you sure you want to delete this project?</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <label className="checkbox-inline">
                                    <input type="checkbox"  />
                                    <h5>Yes this is not an accident, I want to delete everything</h5>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Export projcet */}
                <div id="exportProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 className="modal-title center">Export project?</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <h4>Export a zip file of all current documents in this project.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success">
                            Export
                        </button>
                    </div>
                </div>

                {/* Projects Item*/}
                <div className="row">
                    <a href="#newProject" data-toggle="modal">
                        <div id="add_proj" className="col-md-3">
                            <span className="genicon-add-circle"></span> <br />
                            <span>Add a new project</span>
                        </div>
                    </a>

                    <a href="">
                        <div className="col-md-3" id="project1">

                            <div id="project_pic_div" style={backImage}>
                                <a href="#editProject" data-toggle="modal" className="edit-a"><img src="/assets/edit-icon.png" id="edit-icon" /></a>
                            </div>

                            <table>
                                <tr style={style1}>
                                    <td className="td1">The Crew</td>
                                    <td className="td2"> 40%</td>

                                </tr>
                            </table>
                        </div>
                    </a>

                    <a href="">
                        <div className="col-md-3" id="project1">

                            <div id="project_pic_div" style={backImage}>
                                <a href="#editProject" data-toggle="modal" className="edit-a"><img src="/assets/edit-icon.png" id="edit-icon" /></a>
                            </div>

                            <table>
                                <tr style={style1}>
                                    <td className="td1">The Crew</td>
                                    <td className="td2"> 40%</td>

                                </tr>
                            </table>
                        </div>
                    </a>
                    <a href="">
                        <div className="col-md-3" id="project1">

                            <div id="project_pic_div" style={backImage}>
                                <a href="#editProject" data-toggle="modal" className="edit-a"><img src="/assets/edit-icon.png" id="edit-icon" /></a>
                            </div>

                            <table>
                                <tr style={style1}>
                                    <td className="td1">The Crew</td>
                                    <td className="td2"> 40%</td>

                                </tr>
                            </table>
                        </div>
                    </a>


                </div>

                <br /><br />
                {/* Archived Projects */}
                <div className="row">
                    <div className="panel-group accordion-custom" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                        <i className="icon-arrow"></i>
                                        Archive Projects
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in">
                                <div className="panel-body">


                                    <div  className="col-md-12" id="archieved_list">
                                        <div id="archieved_projects_details_name"className="col-md-4">The Crew</div>
                                        <div id="archieved_projects_details" className="col-md-4">Archived:<span className="arc-red">01-Feb-2017</span></div>
                                        <div id="archieved_projects_details" className="col-md-4"><button type="button" className="btn btn-sm btn-primary">Restore</button></div>
                                    </div>
                                    <div className="col-md-12" id="archieved_list">
                                        <div id="archieved_projects_details_name"className="col-md-4">The Crew</div>
                                        <div id="archieved_projects_details" className="col-md-4">Archived:<span className="arc-red">01-Feb-2017</span></div>
                                        <div id="archieved_projects_details" className="col-md-4"><button className="btn btn-sm btn-primary">Restore</button></div>
                                    </div>
                                    <div className="col-md-12" id="archieved_list">
                                        <div id="archieved_projects_details_name"className="col-md-4">The Crew</div>
                                        <div id="archieved_projects_details" className="col-md-4">Archived:<span className="arc-red">01-Feb-2017</span></div>
                                        <div id="archieved_projects_details" className="col-md-4"><button className="btn btn-sm btn-primary">Restore</button></div>
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