import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Auth = () => {
    const status = useSelector(state => state.login);
    const auth= status.auth;
    return (
        auth ? <Outlet /> : <Navigate to='/login' />
    )
}

export default Auth