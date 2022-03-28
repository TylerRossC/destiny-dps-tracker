import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './OverallDmgCard.css'

const OverallDmgCard = () => {
  
  
  
  
  
  
  
  return (

    <div> 
    
    <Card className="dmg-card">
      <Card.Header>Name of encounter/boss</Card.Header>
      <Card.Body>
        <Card.Title>Total Damage</Card.Title>
        <Card.Text>
          TOTAL DAMAGE HERE
        </Card.Text>
        <Button variant="primary">Reset</Button>
      </Card.Body>
      <Card.Footer className="text-muted">"Throw more grenades!"</Card.Footer>
    </Card>
    
    </div>

  )
}

export default OverallDmgCard