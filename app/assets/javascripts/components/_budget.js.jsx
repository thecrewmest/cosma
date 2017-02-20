const Budget = React.createClass({
    render() {
        return(
            <div>

                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div>
                        <AppHeader />
                        <MainPropTab/>
                        <BudgetTab />
                    </div>
                </div>

                <div  className="col-md-3 col-xs-12" id="main-container">
                    <div className="budget-content">

                        <div className="col-md-3 col-xs-12">
                            <div className="col-md-3 col-xs-12" id="circle-budget">
                                <span className="budget-amount">Ghc30000</span>
                                <img src="/assets/equal.png" className="equal"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div  className="col-md-3 col-xs-12" id="main-container">
                    <div className="budget-content">

                        <div className="col-md-3 col-xs-12">
                            <div className="col-md-3 col-xs-12" id="circle-budget">
                                <span className="budget-amount">Ghc22000</span>
                                <img src="/assets/plus.png" className="plus"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div  className="col-md-3 col-xs-12" id="main-container">
                    <div className="budget-content">

                        <div className="col-md-3 col-xs-12">
                            <div className="col-md-3 col-xs-12" id="circle-budget">
                                <span className="budget-amount">Ghc10000</span>
                                <img src="/assets/plus.png" className="plus"/>

                            </div>
                        </div>

                    </div>
                </div>

                <div  className="col-md-3 col-xs-12" id="main-container">
                    <div className="budget-content">

                        <div className="col-md-3 col-xs-12">
                            <div className="col-md-3 col-xs-12" id="circle-budget">
                            </div>
                        </div>

                    </div>
                </div>

                {/*Descriptions*/}
                <div className="descriptions">
                    <div className="col-md-3 ool-xs-12" id="descriptions-div">
                        <div className="col-md-12 col-xs-12" id="budget-details-div">
                            <span className="collaborator-name">Total Current Cost</span><br />
                        </div>
                    </div>
                    <div className="col-md-3 ool-xs-12" id="descriptions-div">
                        <div className="col-md-12 col-xs-12" id="buget-details-div">
                            <span className="descriptions-task-completed">Cost of Task Completed</span><br />
                        </div>
                    </div>
                    <div className="col-md-3 ool-xs-12" id="descriptions-div">
                        <div className="col-md-12 col-xs-12" id="budget-details-div">
                            <span className="descriptions-task-ongoing">Current Cost of Task Ongong</span><br />
                        </div>
                    </div>
                    <div className="col-md-3 ool-xs-12" id="descriptions-div">
                        <div className="col-md-12 col-xs-12" id="budget-details-div">
                            <span className="descriptions-task-unstarted">Cost of Task Unstarted</span><br />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});