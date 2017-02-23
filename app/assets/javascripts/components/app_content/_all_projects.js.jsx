const progressWidth = 40;

const style1 = {
    borderTop: '5px solid lightblue'
};

let AllProjects = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    handleEdit(id) {

    },
    startUpdate(item) {
        this.props.doUpdate(item);
    },
    render() {
        var projects = this.props.projects.map((project) => {
            return(
                <a key={project.id} href={`/overview`}>
                    <ProjectItem project={project}
                        handleDelete={this.handleDelete.bind(this, project.id)}
                        handleEdit={this.handleEdit}
                        initUpdate={this.startUpdate}
                    />
                </a>
            )
        });

        return (
            <div>
                {projects}
            </div>
        )
    }
});


