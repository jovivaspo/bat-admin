import React, { useEffect } from 'react'
import { loadChargers } from '../services/fetchFunctions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from '../components/Slide'
import Title from '../components/Title'
import Container from '../components/Container'

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
    <Container>
      <Title title='Dashboard' />
      <Slide elements={chargers} title={'Cargadores'} />
    </Container>
  )
}

export default Home