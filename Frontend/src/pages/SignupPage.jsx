import React, { useEffect } from 'react'
import Signup from '../components/Signup/Signup.jsx'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
 
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
   if(isAuthenticated ===  true){
    navigate("/");
        window.location.reload(true); 
   } 
  }, [isAuthenticated]
  )
  return (
   <div>
    <Signup/>
   </div>
  )
}

export default SignupPage