import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './DpsCard.css'

const DpsCard = () => {
  return (
    <div className='dps-card-container'> 
      <Card className="dps-card">
        <Card.Header className="header">Name of encounter/boss</Card.Header>
        <Card.Body>
          <Card.Title className="title"> DPS (all weapons and abilities)</Card.Title>
          <Card.Text className="text">
            DPS HERE
          </Card.Text>
          <Button variant="primary">Reset</Button>
        </Card.Body>
        <Card.Footer className="footer">"Eyes up guardian"</Card.Footer>
      </Card>
    </div>
  )
}

export default DpsCard