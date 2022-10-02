import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Admin, VerifyUser } from '../Redux/Reducers/userSlice';
import { Status } from '../Redux/Reducers/userSlice';
import Loading from '../../constant/Loading/Loading';

const Auth = () => {
    const dispatch = useDispatch();
    const { status, admin } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(VerifyUser())
    }, [dispatch]);

    if (status === Status.Loading) {
        return (
            <div className="grid h-screen w-full place-items-center">
                <Loading />
            </div>
        )
    }
    else if (status === Status.Idle) {
        if (admin.admin === true && admin.type === Admin.admin) {
            return < Outlet />
        }
        else { return <Navigate to='/' /> }
    }
    else if (status === Status.Errors) {
        return <Navigate to='/login' />
    }

}

export default Auth