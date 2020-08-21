import React from 'react'

const CreateAcc = ({ toggleSideMenu, handleSubmit, toggleContent }) => {

    return (
        <>
            <header>
                <div className="title">
                    <h2>
                        Vytvoriť účet
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
                    <input type="submit" value="Vytvoriť účet" id="log-in"/>
                </form>
                <p>
                    Máš už účet? 
                    <span onClick={ toggleContent }>
                        Prihlás sa!
                    </span>
                </p>
            </main>
            <footer>
                    <p>Copyright © 2020 Bmby</p>
            </footer>
        </>
    )
}

export default CreateAcc
