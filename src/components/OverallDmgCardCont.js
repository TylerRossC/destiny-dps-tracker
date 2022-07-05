import React from 'react'
import OverallDmgCard from './OverallDmgCard';

const OverallDmgCardCont = () => {
  const renderDmgCard = () => {
    return <OverallDmgCard></OverallDmgCard>
  }
  return (
    <div className='OverallDamageCardContainer'>
      {renderDmgCard()}
    </div>
  )
}

export default OverallDmgCardCont