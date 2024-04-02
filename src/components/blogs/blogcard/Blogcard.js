import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Blogcard.css"

function Blogcard(props) {
  return (
    <div className="blog-card-container">
      <Card className='blog-card' style={{ width: '18rem', marginBottom: '20px', position: 'relative' }}>
        <Card.Img variant="top" src={props.imgSrc} style={{ borderRadius: "20px" }} />
        <Card.Body className='blog-body'>
          <Card.Title className='blog-title'>{props.title}</Card.Title>
          <Card.Text className='blog-text'>{props.aboutblog}</Card.Text>
          <Card.Subtitle className='blog-role'>{props.role}</Card.Subtitle>
          <div className="button-container">
            <Button variant="primary" className="blog-button btn" target='_blank' rel='noreffer' href={props.Mediumlink}>Medium Link</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Blogcard;
