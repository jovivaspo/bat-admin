import React, { useEffect } from 'react'
import { loadChargers } from '../services/fetchFunctions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from '../components/Slide'

const Home = ({user}) => {
  const chargers = useSelector(state => state.chargers)
  const dispatch = useDispatch()
  const token = user.token

  useEffect(()=>{
    if(user){
      loadChargers(token,dispatch)
    }
  },[])

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      <Slide elements={chargers} title={'Cargadores disponibles'}/>
    </div>
  )
}

export default Home