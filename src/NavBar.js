import React, { Component } from 'react';

class NavBar extends Component{
    state={
        lightMode: true,
    };

    handleThemeSwitch = () => {
        this.setState({
            lightMode: !this.state.lightMode
        })
    }

    render(){
        const switchButton = this.state.lightMode ? 'switch-button-off' : 'switch-button-on';

        return(
            <nav>
                <div className="logo">DK weather</div>
                <div className="light-mode">
                    <div className={switchButton} onClick={() => this.handleThemeSwitch()}></div>
                </div>
            </nav>
        )
    }
}

export default NavBar