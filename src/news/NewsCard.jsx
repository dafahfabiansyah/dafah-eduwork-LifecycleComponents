import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, description, imageUrl, url }) {
  return (
    <Card className="container mb-4 d-flex">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={url}>
          <Button variant="primary" href={url} target="_blank">
            Baca Selengkapnya
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
