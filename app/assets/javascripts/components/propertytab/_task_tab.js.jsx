const TaskTab = React.createClass({
    render() {
        return (
            <div className="col-sm-12 side-bar">
                <div className="row">
                    <div className="col-sm-9">
                        <a href="#newTask" className="btn btn-task-color" data-toggle="modal" title="Add Task">
                            <span className="genicon-task-hammer-plus-compact"/>
                        </a>

                        <a className="btn btn-task-color" title="Print Tasks">
                            <span className="genicon-printer-compact"/>
                        </a>

                        <a className="btn btn-task-color" title="Export CSV">
                            <span className="genicon-harddrive-download-compact"/>
                        </a>
                    </div>
                    <div className="col-sm-3 text-right">
                        <input type="text" placeholder="search task"/>
                    </div>
                </div>
            </div>
        )
    }
});