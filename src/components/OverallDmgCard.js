import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './OverallDmgCard.css'

const OverallDmgCard = () => {
  
  
  
  
  
  
  
  return (

    <div> 
    
    <Card className="dmg-card">
      <Card.Header className="header">Name of encounter/boss</Card.Header>
      <Card.Body>
        <Card.Title className="title">Total Damage</Card.Title>
        <Card.Text className="text">
          TOTAL DAMAGE HERE
        </Card.Text>
        <Button variant="primary">Reset</Button>
      </Card.Body>
      <Card.Footer className="footer">"Throw more grenades!"</Card.Footer>
    </Card>
    
    </div>

  )
}

export default OverallDmgCard