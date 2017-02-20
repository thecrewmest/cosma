var ProjectItem = React.createClass({

    render() {
        const project  = this.props.project;
        const title = project.title;
        const progress = project.progress;
        const description = project.description;

        function getProgress(progress) {
            let pgDesc = '';
            if(progress >= 0 && progress <= 50) {
                pgDesc = 'progress-bar-danger'
            } else if (progress > 50 && progress <= 80) {
                pgDesc = 'progress-bar-warning'
            } else  {
                pgDesc = 'progress-bar-success'
            }
            return pgDesc;
        }

        function getModal (project) {
            modalId='editProject' + project.id;
            return (
            <div id={modalId} className="modal fade" tabIndex="-1" data-width="500"
                 style={newProjectModalStyle}>

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
                                               defaultValue={
                                                   project.title == null ? 'Project title': project.title}
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
                    <button type="button" className="btn btn-success">
                        Save
                    </button>
                </div>
            </div>
            );
        };

        return(
            <div className="col-md-3" id="project1">
                <div id="project_pic_div" style={backImage}>
                    <a href={"#editProject" + this.props.project.id} data-toggle="modal"
                       className="edit-a" onClick={this.clicked}>
                        <img src="/assets/edit-icon.png" id="edit-icon"/>
                    </a>

                    <div className="progressbar_div" id="pbarDiv">
                        <div className={`progress progress-sm ${getProgress(progress)}`}  id="progressbarGreen"
                             role="progressbar" aria-valuenow="40"
                             aria-valuemin="0" aria-valuemax="100%"
                             style={{width: progress == null? 1 + '%' : progress + '%'}}>
                        </div>
                    </div>

                    <div className="p-content">
                        <span className="pull-left p-content-title">{project.title}</span>
                        <span className="pull-right p-content-progress">
                            {progress == null ? '0%' : progress + '%'}
                        </span>
                    </div>



                </div>
                {getModal(project)}
            </div>
        )
    }
});