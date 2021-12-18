import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card,Button} from 'react-bootstrap';
import "./Card.css";



export default function MyCard({name,profilePic,twitterId, linkedinId}) {
    return (
        <>
       
    <Card style={{ width: '16rem' }} className="image">
        <Card.Img variant="top" className="size" src={profilePic} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
      
            <Button variant="dark" className="Button"> <a href={twitterId} target="_blank" rel="noopener noreferrer" className="link-text">Go to Twitter</a></Button>
     
            <Button variant="dark" className="Button"> <a href={linkedinId} target="_blank" rel="noopener noreferrer" className="link-text">Go to LinkedIn Profile</a></Button>
        </Card.Body>
  </Card>
   
        </>
    )
}