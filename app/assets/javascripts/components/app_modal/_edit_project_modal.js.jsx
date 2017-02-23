let EditProjectModal = React.createClass({
    handleClick() {
        let title = this.refs.title.value;
        let budget = this.refs.budget.value;
        let isArchived = this.props.pitem.is_archived;
        let description = this.refs.description.value;
        let id = this.props.pitem.id;
        let item = {
            id: id,
            title: title,
            budget: budget,
            description: description,
            is_archived: isArchived
        };
        this.props.handleUpdate(item);

    },
    render() {
        let project  = this.props.pitem;
        let title = project.title;
        let progress = project.progress;
        let description = project.description;

        return (

            <div id={'editProject'+ project.id} className="modal fade" tabIndex="-1" data-width="500"
                 style={{display: 'none'}}>

                {/* Edit Project Modal Head */}
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 className="modal-title center">Edit Project</h4>
                </div>

                {/* Edit Project Modal Body */}
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <form role="form" className="form-horizontal">
                                {/* Project Name Field */}
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Project Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder="Project name"
                                               ref="title"
                                               defaultValue={
                                                   project.title == null ? 'Project name': project.title}
                                               className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Budget</label>
                                    <div className="col-sm-8">
                                        <input type="number" ref='budget'
                                               value={project.budget == null ? 'Budget': project.budget}
                                               placeholder="Budget"
                                               className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Description</label>
                                    <div className="col-sm-8">
                                        <textarea placeholder="Description"
                                                  ref='description'
                                                  defaultValue={project.description == null ?
                                                      'Description': project.description }
                                                  className="form-control" />
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
                                        <p><strong>0</strong> of your <strong>50</strong>
                                            file allowance (Upgrade to increase)</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Admin Actions:</label>
                                    <div className="col-sm-9">
                                        <a className="btn btn-light-grey input-sm" data-toggle="modal"
                                           href="#exportProject">Export project</a>&nbsp;&nbsp;
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label">Owner Actions:</label>
                                    <div className="col-sm-9">
                                        <a className="btn btn-light-grey" data-toggle="modal"
                                           href="#deleteProject">Delete project</a>&nbsp;&nbsp;
                                        <a className="btn btn-light-grey" data-toggle="modal"
                                           href="#archiveProject">Archive project</a>
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