import React, { Component } from 'react';
import Header from '../../components/login/header';
import Footer from '../../components/login/footer';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='modal auth-modal-block fade in' role="dialog" tabIndex="-1" >
                <div className="modal-dialog modal-sm" role="document">
                    <Header />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Login;