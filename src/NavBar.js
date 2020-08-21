import React, { Component } from 'react';
import SlideMenu from './SlideMenu'

class NavBar extends Component{
    state={
        lightMode: true,
        slideMenuIn: false,
    };

    handleThemeSwitch = () => {
        this.setState({
            lightMode: !this.state.lightMode
        })
    }

    toggleSlideMenu = () => {
        this.setState({
            slideMenuIn: this.state.slideMenuIn ? false : true
        })
    }

    render(){
        const switchButton = this.state.lightMode ? 'switch-button-off' : 'switch-button-on';

        return(
            <div>
                <nav>
                    <div className="leftPart">
                        <i className="fas fa-bars" onClick={this.toggleSlideMenu}></i>
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
                <SlideMenu
                    toggleSlideMenu={this.toggleSlideMenu}
                    slideMenuIn={this.state.slideMenuIn}
                />
            </div>
        )
    }
}

export default NavBar