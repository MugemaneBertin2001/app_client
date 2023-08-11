import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider'


function DefaultLayout() {
    const {user, token} = useStateContext();
    if(!token){
        return (
            <Navigate to='/login' />
        )
    }

  return (
    <div>
        <h1>DefaultLayout</h1>
        <Outlet />
    </div>

  )
}

export default DefaultLayout