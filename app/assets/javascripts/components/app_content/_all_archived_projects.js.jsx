const AllArchivedProjects = React.createClass({
    render() {


        let archivedProjects = this.props.archivedItems.map((project) => {
            return (
                <div key={project.id} className="col-sm-12" id="archieved_list">
                    <div id="archieved_projects_details_name" className="col-sm-3">{project.title}</div>
                    <div className="col-sm-3">{project.budget.toString()}</div>
                    <div id="archieved_projects_details" className="col-sm-3">Archived: <span
                        className="arc-red">{project.created_at}</span></div>
                    <div id="archieved_projects_details" className="col-sm-3">
                        <button type="button" className="btn btn-sm btn-primary">Restore</button>
                    </div>
                </div>
            )
        });


        return (
            <div className="row">
                <div className="panel-group accordion-custom" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseOne">
                                    <i className="icon-arrow"></i>
                                    Archived Projects
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse">
                            <div className="panel-body">
                                {archivedProjects}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});