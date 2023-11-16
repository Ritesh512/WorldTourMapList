import React, { useEffect } from 'react'
import { useAuth } from '../contexts/FakeAuthContexts'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {isAuthenticated} = useAuth();
    const navigate = useNavigate(); 

    useEffect(function(){
        if(!isAuthenticated) navigate("/");
    },[isAuthenticated,navigate]);

  return isAuthenticated? children:null;
}


export default ProtectedRoute; 