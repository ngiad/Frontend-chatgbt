import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import NavMenu from '../../Components/NavMenu'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import "./ContainerLayout.css"

const ContainerLayout = () => {

  const Navigate = useNavigate()
  const user = useSelector((state) => state.User)

  useEffect(() => {

    if(!user.token){
      Navigate("/")
    }

  },[user])

  return (
    <div className='ContainerLayout'>
      <div className={`NavMenu-container`}><NavMenu /></div> 
      <div className='test'> <Outlet /></div> 
      <ToastContainer />
    </div>
  )
}

export default ContainerLayout