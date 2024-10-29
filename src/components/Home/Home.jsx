import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3>This is a Home section</h3>
            <Outlet />
        </div>
    );
};

export default Home;