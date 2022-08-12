import React from 'react'
import './StateCharger.css'


const status = {
    'fault': {
        message: 'Averiado',
        color: '#d30e25'
    },
    'free': {
        message: 'Libre',
        color: '#24b707'
    },
    'working': {
        message: 'En uso',
        color: '#0077F8'
    },
    'locked': {
        message: 'Bloqueado',
        color: 'rgb(242, 137, 0)'
    }

}

const StateCharger = ({ charger }) => {
    return (
        <div className='container-state-charger' style={{ backgroundColor: status[charger?.state]?.color }}>
            <h3 className='state-charger'>
                {status[charger?.state]?.message}
            </h3>
        </div>


    )
}

export default StateCharger