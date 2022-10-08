import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FetchLogout } from '../../container/Redux/Reducers/logoutSlice';

const Logout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchLogout())
    }, [dispatch])

    
    return (
       <Navigate to='/login'/>
    )
}

export default Logout