let ProjectItem = React.createClass({
    onUpdate(item) {
        this.props.initUpdate(item);
    },
    render() {
        const project  = this.props.project;
        const title = project.title;
        const progress = project.progress;
        const description = project.description;
        const image = project.cover_image == null?
                {backgroundImage: 'url(/assets/image-placeholder.svg)',
                    backgroundSize: 'cover',
                    backgroundColor: '#DCDAD2',
                    backgroundPosition: 'center'} :
                {backgroundImage: 'url(/assets/'+project.cover_image+')', backgroundSize: 'cover'}

        function getProgress(progress) {
            let pgDesc = '';
            if(progress >= 0 && progress < 50) {
                pgDesc = 'progress-bar-danger'
            } else if (progress >= 50 && progress < 80) {
                pgDesc = 'progress-bar-warning'
            } else if (progress >= 80 && progress <= 100)  {
                pgDesc = 'progress-bar-success'
            } else {
                pgDesc = 'progress-bar-danger'
            }
            return pgDesc;
        }

        return(
            <div className="col-md-3" id="project1">
                <div id="project_pic_div" style={image}>
                    <a href={"#editProject" + project.id} data-toggle="modal"
                       className="edit-a">
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

                <EditProjectModal pitem={this.props.project}
                                  handleEdit={this.props.handleEdit}
                                  handleUpdate={this.onUpdate} />

            </div>
        )
    }
});