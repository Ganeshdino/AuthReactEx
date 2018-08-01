import React, { Component } from 'react';


class Home extends Component {
    // state = {
    // }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Welcome to Portal Point</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isLogged : state.isLogged}
}

const mapDispatchToProps = () => {
    return {
        loadLogin : ()=>dispath(actionCreator.loadLogin())
    }
}

export default Home;