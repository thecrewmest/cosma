var Breadcrumb = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <ol className="breadcrumb">
                        <li>
                            <i className="clip-home-3"></i>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li className="active">
                            Projects
                        </li>
                        <li className="search-box">
                            <form className="sidebar-search">
                                <div className="form-group">
                                    <input type="text" placeholder="Start Searching..." />
                                        <button className="submit">
                                            <i className="clip-search-3"></i>
                                        </button>
                                </div>
                            </form>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
});