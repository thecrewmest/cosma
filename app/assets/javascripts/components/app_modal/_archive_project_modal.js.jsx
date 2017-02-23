let ArchiveProjectModal = React.createClass({
    render() {
        return(
            <div id="archiveProject" className="modal fade" tabIndex="-1" data-width="500" style={newProjectModalStyle}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 className="modal-title center">Are you sure you want to delete this project?</h4>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <label className="checkbox-inline">
                                <input type="checkbox"  />
                                <h5>Do you want to archive this project now?</h5>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" data-dismiss="modal" className="btn btn-light-grey">
                        Cancel
                    </button>
                    <button type="button" className="btn btn-danger">
                        Archive
                    </button>
                </div>
            </div>
        )
    }
});