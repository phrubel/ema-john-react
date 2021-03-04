import React from 'react';

 const errorStyle={
        color:"red",
        fontSize:"25px",
        textAlign:"Center"
 }
const NotFound = () => {
    return (
        <div style={errorStyle}>
             <h4>404 Not Found..</h4>
            <h2>Something Error...!!!</h2>
        </div>
    );
};

export default NotFound;