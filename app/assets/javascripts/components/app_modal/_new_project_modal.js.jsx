let NewProjectModal = React.createClass({
    handleClick() {
        let title = this.refs.title.value;
        let budget = this.refs.budget.value;
        let description = this.refs.description.value;
        let isArchived = false;

        $.ajax({
            url: '/api/v1/projects',
            type: 'POST',
            data: {
                project: {
                    title: title,
                    budget: budget,
                    description: description,
                    is_archived: isArchived
                }
            },
            success: (project) => {
                this.props.handleCreateProject(project);
                alert('Project Added Successfully');
                $('#newProject').modal('hide');
                $('#newProjectModalForm')[0].reset();
            }
        });
    },
    render() {
        return(
            <div id="newProject" className="modal fade" tabIndex="-1" data-width="500" style={{display: 'none'}}>
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
        )
    }
});