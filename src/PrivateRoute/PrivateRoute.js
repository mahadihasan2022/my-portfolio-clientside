import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminContext } from '../App';
import Login from '../Login/Login';

const PrivateRoute = () => {
    const [user] = useContext(AdminContext);
    console.log(user, 'ddd')
    return  user?.email==='mdmehedyh55@gmail.com' ? <Outlet/> : <Login/>
};

export default PrivateRoute;