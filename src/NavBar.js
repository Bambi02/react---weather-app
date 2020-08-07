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
                    <button className={switchButton} onClick={() => this.handleThemeSwitch()}></button>
                </div>
            </nav>
        )
    }
}

export default NavBar