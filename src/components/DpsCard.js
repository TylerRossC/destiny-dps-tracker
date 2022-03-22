import React from 'react'
import { Card, Button } from 'react-bootstrap'

const DpsCard = () => {
  
  
  
  
  
  
  return (

    <div> 

        <Card className="dps-card">
      <Card.Header>DPS Card</Card.Header>
      <Card.Body>
        <Card.Title> DPS (all weapons and abilities)</Card.Title>
        <Card.Text>
          DPS HERE
        </Card.Text>
        <Button variant="primary">Reset</Button>
      </Card.Body>
      <Card.Footer className="text-muted">"Eyes up guardian"</Card.Footer>
    </Card>

  </div>

  )
}

export default DpsCard