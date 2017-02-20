var CollaboratorTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 side-bar" id="collaborator-parent-div">
                <div className="row">
                    <div className="col-md-12 col-xs-12" id="add-collaborator-bar">
                         <span className="genicon-person-plus hammar-plus" id="person-icon">
                                <a href="#collaborators-modal" data-toggle="modal"
                                   className="add-collaborator">&nbsp;&nbsp;Add collaborator
                                </a>
                         </span>
                    </div>

                    <div className="col-md-12 col-xs-12" id="company-name-div">
                        <span className="company-name">Despite Constructions Ltd</span>&nbsp;&nbsp;
                        <a href="#collaborators-edit-company-name-modal" data-toggle="modal"><img
                            src="/assets/edit-icon.png" id="edit-icon"/></a>
                    </div>


                    <div className="col-md-12 col-xs-12" id="collaborators-list">
                        <div className="col-md-2 col-xs-12">
                            <div className="circle">
                                <a href="#collaborators-edit-user-modal" id="edit-icon-user" data-toggle="modal"><img
                                    src="/assets/edit-icon.png" id="edit-icon"/></a>
                            </div>
                            <div className="col-md-12 col-xs-12" id="collaborator-details-div">
                                <span className="collaborator-name">Van Solo</span><br />
                                <span className="collaborator-privellege">Project Admin</span><br />
                                <span className="collaborator-phone">+233-54-969-1947</span><br />
                                <span className="collaborator-email">vansolo33@gmail.com</span><br />
                                <span className="collaborator-lastupdate">January 15, 2017</span><br />
                            </div>

                        </div>
                        <div className="col-md-2 col-xs-12">
                            <div className="circle">
                                <a href="#collaborators-edit-user-modal" id="edit-icon-user" data-toggle="modal"><img
                                    src="/assets/edit-icon.png" id="edit-icon"/></a>
                            </div>
                            <div className="col-md-12 col-xs-12" id="collaborator-details-div">
                                <span className="collaborator-name">Donald Trump</span><br />
                                <span className="collaborator-privellege">Member</span><br />
                                <span className="collaborator-phone">+233-54-969-1947</span><br />
                                <span className="collaborator-email">vansolo33@gmail.com</span><br />
                                <span className="collaborator-lastupdate">January 15, 2017</span><br />
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-12">
                            <div className="circle">
                                <a href="#collaborators-edit-user-modal" id="edit-icon-user" data-toggle="modal"><img
                                    src="/assets/edit-icon.png" id="edit-icon"/></a>
                            </div>
                            <div className="col-md-12 col-xs-12" id="collaborator-details-div">
                                <span className="collaborator-name">Michael Jackson</span><br />
                                <span className="collaborator-privellege">Member</span><br />
                                <span className="collaborator-phone">+233-54-969-1947</span><br />
                                <span className="collaborator-email">vansolo33@gmail.com</span><br />
                                <span className="collaborator-lastupdate">January 15, 2017</span><br />
                            </div>
                        </div>

                    </div>

                    {/*collabrator modal*/}
                    <div id="collaborators-modal" className="modal fade" tabIndex="-1" data-width="500"
                         style={newProjectModalStyle}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title center">Add collaborator</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form role="form" className="form-horizontal">
                                        {/* Project Name Field */}
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Collaborator</label>
                                            <div className="col-sm-9">
                                                <input type="text" ref='title' placeholder="Collaborator's name or email address"
                                                       className="form-control"/>
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Company</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>Choose a company</option>
                                                    <option>Despite Groups</option>
                                                    <option>The Crew</option>
                                                </select>
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
                    {/*Update company modal*/}
                    <div id="collaborators-edit-company-name-modal" className="modal fade" tabIndex="-1"
                         data-width="500" style={newProjectModalStyle}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title center">Update company name</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form role="form" className="form-horizontal">
                                        {/* Project Name Field */}
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Name</label>
                                            <div className="col-sm-8">
                                                <input type="text" ref='title' placeholder="Company name"
                                                       className="form-control"/>
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
                    {/*Update collaborator modal*/}
                    <div id="collaborators-edit-user-modal" className="modal fade" tabIndex="-1" data-width="500"
                         style={newProjectModalStyle}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 className="modal-title center">Update collaborator details</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form role="form" className="form-horizontal">
                                        {/* Project Name Field */}

                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Company</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>choose a company</option>
                                                    <option>The Crew</option>
                                                    <option>Despite Group</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Privillege</label>
                                            <div className="col-sm-9">
                                                <select className="collaborator-privillege form-control">
                                                    <option value="admin">Project admin</option>
                                                    <option value="member">Member</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Email</label>
                                            <div className="col-sm-9">
                                                <input type="number" ref='budget' placeholder="Email"
                                                       className="form-control"/>
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
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                            <button type="button" className="btn btn-success" onClick={this.handleClick}>
                                Save
                            </button>
                        </div>
                    </div>

                </div>
            </div>
                )
            }
});