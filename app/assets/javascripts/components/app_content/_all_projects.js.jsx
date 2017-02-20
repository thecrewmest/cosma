const backImagePath = '/assets/project_default_image.jpeg';
const progressWidth = 40;
const backImage = {
    backgroundImage: `url(${backImagePath})`
};

const style1 = {
    borderTop: '5px solid lightblue'
};


var AllProjects = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    render() {
        var projects = this.props.projects.map((project) => {
            return(
                <a key={project.id} href="/overview">
                    <ProjectItem project={project}
                        handleDelete={this.handleDelete.bind(this, project.id)}
                        handleEdit={this.handleEdit}
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


