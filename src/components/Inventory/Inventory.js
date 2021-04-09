import React from 'react';




const Inventory = () => {
    const product = {};

    // post all data
    const handleAddProducts = () => {
        fetch('https://lit-harbor-25416.herokuapp.com/addProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text" /></p>
                <p><span>Price: </span><input type="text" /></p>
                <p><span>Quantity: </span><input type="text" /></p>
                <p><span>product Image: </span><input type="file" /></p>

                <button onClick={handleAddProducts}>Add Products</button>
            </form>


        </div>
    );
};

export default Inventory;