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
                <div className="leftPart">
                    <i class="fas fa-bars"></i>
                    <div className="logo">DK weather</div>
                </div>
                <div className="navDayName">
                    { this.props.children }
                </div>
                <div className="rightPart">
                    <i className='wi wi-day-sunny'></i>
                    <div className="light-mode">
                        <div className={switchButton} onClick={() => this.handleThemeSwitch()}></div>
                    </div>
                    <i className='wi wi-night-clear'></i>
                </div>
            </nav>
        )
    }
}

export default NavBar