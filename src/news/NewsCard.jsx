import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class NewsCard extends React.Component {
  render() {
    const { title, description, imageUrl, url } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={url} target="_blank">
            Baca Selengkapnya
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default NewsCard;
