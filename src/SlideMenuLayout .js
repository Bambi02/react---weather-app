import React, { useState } from 'react';
import SlideMenuUser from './SlideMenuUser'; 
import SlideMenuUserBody from './SlideMenuUserBody'; 
import SlideMenuGuestBody from './SlideMenuGuestBody'

const SlideMenuLayout  = ({ toggleSlideMenu, loggedIn, handleToggleLoggedIn}) => {

    const [signingIn, toggleSignIn] = useState(false);

    const handleToggleSignIn = () => {
        toggleSignIn(!signingIn);
    }

    const loggedInTitle = 'Vitaj naspäť';
    const guestTitle = signingIn ? 'Prihlás sa' : 'Vytvoriť účet';

    const title = loggedIn ? loggedInTitle : guestTitle;
    const user = loggedIn ? <SlideMenuUser /> : null;
    const menuBody = loggedIn 
        ? <SlideMenuUserBody handleToggleLoggedIn={ handleToggleLoggedIn } /> 
        : <SlideMenuGuestBody handleToggleLoggedIn={ handleToggleLoggedIn } signingIn={ signingIn } handleToggleSignIn={ handleToggleSignIn }/>;

    return (
        <>
            <header>
                <div className="title">
                    <h2>
                        { title }
                    </h2>
                    <i className="fas fa-times" onClick={toggleSlideMenu}></i>
                </div>  
                { user }
            </header>
            <main>
                { menuBody }
            </main>
            <footer>
                    <p>Copyright © 2020 Bmby</p>
            </footer>
        </>
    )
}

export default SlideMenuLayout 
