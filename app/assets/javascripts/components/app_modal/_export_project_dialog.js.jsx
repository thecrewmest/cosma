let ExportProjectModal = React.createClass({
    render() {
        return(
            <div id="exportProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 className="modal-title center">Export project?</h4>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Export a zip file of all current documents in this project.</h4>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                        Cancel
                    </button>
                    <button type="button" className="btn btn-success">
                        Export
                    </button>
                </div>
            </div>
        )
    }
});