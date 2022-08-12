import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Table from '../components/Table'
import { BsLightningCharge } from 'react-icons/bs'
import Container from '../components/Container'
import Subtitle from '../components/Subtitle'
import StateCharger from '../components/StateCharger'

const Charger = () => {
  const chargers = useSelector(state => state.chargers)
  const params = useParams()

  const charger = chargers.find(charger => charger._id === params.id)


  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1.2rem' }}>
        <Subtitle subtitle={charger?.name}>
          <BsLightningCharge size={24} color="#000000" />
        </Subtitle>
        <StateCharger charger={charger} />
      </div>
      <Table title='Usuarios registrados' items={charger?.user} />
      <Table title='Registro de actividad' items={charger?.uses} />
    </Container>
  )
}

export default Charger