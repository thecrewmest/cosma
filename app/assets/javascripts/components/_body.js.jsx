var Body = React.createClass({
    getInitialState() {
        return {
            projects: []
        }
    },
    componentDidMount() {
        $.getJSON('/api/v1/projects.json',
            (response) => {this.setState({projects: response})})
    },
    handleCreateProject(project) {
        const newState = this.state.projects.concat(project);
        this.setState({projects: newState});
    },
    handleDelete(id) {
        $.ajax({
            url: `/api/v1/projects/${id}`,
            type: 'DELETE',
            success: (response) => {
                this.removeItemClient(id);
            }
        });
    },
    removeItemClient(id) {
        var newProjects = this.state.projects.filter( (project) => {
            return project.id != id;
        });
        this.setState({projects: newProjects})
    },
    render() {
        return (
            <div className="container p-l-100">
                {/*<AppContent />*/}
                <Project handleCreateProject={this.handleCreateProject} />

                {/* Projects Item*/}
                <div className="row">
                    {/* Toggle Add New Project */}
                    <a href="#newProject" data-toggle="modal">
                        <div id="add_proj" className="col-md-3">
                            <span className="genicon-add-circle"></span> <br />
                            <span>Add a new project</span>
                        </div>
                    </a>

                    <AllProjects projects={this.state.projects}
                                 handleDelete={this.handleDelete} />
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