const Collaborator = React.createClass({
    render() {
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <CollaboratorTab />
                    </div>
                </div>

                <div className="main-container">
                    <NewTask />
                </div>
            </div>
        )
    }
});