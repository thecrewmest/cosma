
const newProjectModalStyle = {
    display: 'none'
}

const progWidth = {
    width: `${progressWidth}%`
}

var Project = React.createClass({
    handleClick() {
        var title = this.refs.title.value;
        var budget = this.refs.budget.value;
        var description = this.refs.description.value;

        $.ajax({
           url: '/api/v1/projects',
           type: 'POST',
           data: { project: { title: title, budget: budget, description: description  } },
           success: (project) => {
               this.props.handleCreateProject(project);
               alert('Project Added Successfully');
               $('#newProject').modal('hide');
               $('#newProjectModalForm')[0].reset();
           }
        });
    },
    render() {
        return (
            <div>
                {/* Modal Create Project Dialog */}
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
                                <form role="form" id="newProjectModalForm" className="form-horizontal">
                                    {/* Project Name Field */}
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Project Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" ref='title' placeholder="Project name" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Budget</label>
                                        <div className="col-sm-8">
                                            <input type="number" ref='budget' placeholder="Budget" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Description</label>
                                        <div className="col-sm-8">
                                            <textarea ref='description' placeholder="Description" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Cover Image</label>
                                        <div className="col-sm-8">
                                            <input id="input-preview" ref='coverImage' type="file" className="file" />
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

                {/* Modal Delete Project*/}
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

                {/* Modal Export projcet */}
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

                {/* Modal Archive a project */}
                <div id="archiveProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
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
                                    <h5>Do you want to archive this project now?</h5>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger">
                            Archive
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});