import React, { useState } from 'react';

const SideMenu = ({ sideBar, toggleSideBar }) => {


    const [loggedIn, toggleLoggIn] = useState(false);
    const [signIn, toggleSignIn] = useState(false);

    const handleToggle = () => {
        toggleLoggIn(!loggedIn);
    }

    const handleToggleSignIn = () => {
        toggleSignIn(!signIn);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToggle();
    }

    const width = sideBar ? '25%' : '0%';
    const background = sideBar ? ({
        opacity: '1',
        zIndex: '10'
    }) : ({
        opacity: '0',
        zIndex: '-1'
    })

    const header = loggedIn ? (
        <header>
            <div className="title">
                <h2>VITAJ NASPäŤ</h2>
                <i className="fas fa-times" onClick={toggleSideBar}></i>
            </div>  
            <div className="user">
                <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt=""/>
                <div className="text-holder">
                    <p>rezzigren@gmail.com</p>
                    <p>free verzia</p>
                </div>
            </div> 
        </header>
        ) : (
        <header>
            <div className="title">
                <h2>PRIHLAS SA</h2>
                <i className="fas fa-times" onClick={toggleSideBar}></i>
            </div>
        </header>
    )

    const createAcc = signIn ? (
        <main>
            <form action="" onSubmit={ handleSubmit }>
                <div className="input-container">
                    <input type="email" name="d" id="" placeholder="Email"/>
                    <i class="far fa-envelope"></i>
                </div>
                <div className="input-container">
                    <input type="password" name="" id="" placeholder="••••••••••"/>
                    <i class="fas fa-lock"></i>
                </div>
                <input type="submit" value="Vytvor si účet" id="log-in"/>
            </form>
            <p>
                Máš už účet?
                <span onClick={ handleToggleSignIn }> Prihlás sa!</span>
            </p>
        </main>
        ) : (
        <main>
            <form action="" onSubmit={ handleSubmit }>
                <div className="input-container">
                    <input type="email" name="d" id="" placeholder="Email"/>
                    <i class="far fa-envelope"></i>
                </div>
                <div className="input-container">
                    <input type="password" name="" id="" placeholder="••••••••••"/>
                    <i class="fas fa-lock"></i>
                </div>
                <input type="submit" value="Prihlás sa do svojho účtu" id="log-in"/>
            </form>
            <p>
                Ešte nemáš účet?
                <span onClick={ handleToggleSignIn }> Vytvor si ho!</span>
            </p>
        </main>
    )

    const main = loggedIn ? (
        <main>
            <ul>
                <li>Domov</li>
                <li>Pridaj Mesto</li>
                <li onClick={ handleToggle }>Odhlásiť sa</li>
            </ul>
        </main>
        ) : (
            createAcc
    )

    return(
        <>
            <div className="side-menu" style={{width}}>
                { header }
                { main }
                <footer>
                    <p>Copyright © 2020 Bmby</p>
                </footer>

            </div>
            <div className="side-background" style={background} onClick={toggleSideBar}></div>
        </>
    )
}

export default SideMenu