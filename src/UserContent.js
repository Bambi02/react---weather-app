import React from 'react'

const UserContent  = ({ toggleSideMenu, toggleLoggedIn }) => {
    return (
        <>
            <header>
                <div className="title">
                    <h2>
                        Vitaj naspäť
                    </h2>
                    <i className="fas fa-times" onClick={toggleSideMenu}></i>
                </div>  
                <div className="user">
                    <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt=""/>
                    <div className="text-holder">
                        <p>rezzigren@gmail.com</p>
                        <p>free verzia</p>
                    </div>
                </div> 
            </header>
            <main>
                <ul>
                    <li>Domov</li>
                    <li>Pridaj Mesto</li>
                    <li onClick={ toggleLoggedIn }>Odhlásiť sa</li>
                </ul>
            </main>
            <footer>
                    <p>Copyright © 2020 Bmby</p>
            </footer>
        </>
    )
}

export default UserContent 
