import React from 'react'
import DpsCard from './DpsCard'

const dpsCardCont = () => {
  const renderDpsCard = () => {
    return <DpsCard></DpsCard>
  }
    return (
    <div className='DamagePerSecondCardContainer'> 
      {renderDpsCard()}
    </div>
  )
}

export default dpsCardCont