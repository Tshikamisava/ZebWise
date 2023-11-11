import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ClickableCards = () => {
    const handleButtonClick = (action) => {
        console.log(`Clicked ${action}`);
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Button style={{ marginRight: '10px' }} onClick={() => handleButtonClick('send')}>Send</Button>
                    <Button style={{ marginRight: '10px' }} onClick={() => handleButtonClick('receive')}>Receive</Button>
                    <Button style={{ marginRight: '10px' }} onClick={() => handleButtonClick('Pay')}>Pay</Button>
                    <Button onClick={() => handleButtonClick('deposit')}>Deposit</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ClickableCards;
