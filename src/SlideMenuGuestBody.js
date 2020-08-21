import React from 'react';

const SlideMenuGuestBody = ({ handleToggleLoggedIn, signingIn, handleToggleSignIn }) => {

    const text = signingIn ? 'Ešte nemáš účet?' : 'Máš už účet?';
    const toggleText = signingIn ? 'Vytvor si ho!' : 'Prihlás sa!';

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToggleLoggedIn();
    }

    return (
        <>
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
                { text }
                <span onClick={ handleToggleSignIn }>
                    { toggleText }
                </span>
            </p>
        </>
    )
}

export default SlideMenuGuestBody