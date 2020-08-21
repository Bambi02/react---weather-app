import React from 'react'

const LogIn = ({ toggleSideMenu, handleSubmit, toggleContent }) => {
    return (
        <>
            <header>
                <div className="title">
                    <h2>
                        Prihlásť sa
                    </h2>
                    <i className="fas fa-times" onClick={toggleSideMenu}></i>
                </div>  
            </header>
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
                    <input type="submit" value="Prihlásť sa" id="log-in"/>
                </form>
                <p>
                    Ešte nemáš účet? 
                    <span onClick={ toggleContent }>
                        Vytvor si ho!
                    </span>
                </p>
            </main>
            <footer>
                    <p>Copyright © 2020 Bmby</p>
            </footer>
        </>
    )
}

export default LogIn
