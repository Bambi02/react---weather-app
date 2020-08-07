import React from 'react';

const NotificationMessgae = ({error, color}) => {
    return(
        <div className="errorMsg" style={{backgroundColor: color}}>
            <p>{error}</p>
        </div>
    )
}

export default NotificationMessgae