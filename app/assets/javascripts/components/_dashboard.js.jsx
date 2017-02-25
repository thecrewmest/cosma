let Dashboard = React.createClass({
    getInitialState() {
        return {
            projects: [],
            archivedProjects: []
        }
    },
    componentDidMount() {
        $.getJSON('/api/v1/projects.json',
            (response) => {this.setState({projects: response})})

        $.getJSON('/api/v1/projects/archived.json',
            (response) => {this.setState({archivedProjects: response})})
    },
    handleCreateProject(project) {
        const newState = this.state.projects.concat(project).reverse();
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
        let newProjects = this.state.projects.filter( (project) => {
            return project.id != id;
        });
        this.setState({projects: newProjects})
    },
    updateItems(item) {
        let items = this.state.projects.filter((i) => { return i.id != item.id });
        items.push(item);
        this.setState({projects: items });
    },
    updateProjectItem(item) {
        console.log(item);
        $.ajax({
            url: `/api/v1/projects/${item.id}`,
            type: 'PUT',
            data: { project: item },
            success: () => {
                this.updateItems(item);
                alert('Updated Successfully');
                $('.modal').modal('hide');
            },
            error: () => {
                alert('failed to update. try again later...');
            }
        });
    },
    render() {
        return (
            <div className="container p-l-100">
                {/*<AppContent />*/}
                <NewProjectModal handleCreateProject={this.handleCreateProject} />

                {/* Projects Item*/}
                <div className="row">
                    {/* Toggle Add New Project */}
                    <a href="#newProject" data-toggle="modal">
                        <div id="add_proj" className="col-md-3">
                            <span className="genicon-add-circle"></span> <br />
                            <span>Add a new project</span>
                        </div>
                    </a>

                    {/* Displays all projects that are not archived */}
                    <AllProjects projects={this.state.projects}
                                 handleDelete={this.handleDelete}
                                 doUpdate={this.updateProjectItem} />
                </div>

                <br /><br />

                {/* Archived Projects */}
                <AllArchivedProjects archivedItems={this.state.archivedProjects} />
            </div>
        )
    }
});