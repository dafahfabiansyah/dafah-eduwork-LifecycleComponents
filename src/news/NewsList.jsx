import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from './NewsCard';
import axios from 'axios';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=cabca71a01f7407ab8ec2319c74ff9a8')
      .then((response) => this.setState({ newsData: response.data.articles }))
      .catch((error) => console.error(error));
  }

  render() {
    const { newsData } = this.state;

    return (
      <div>
        <Row>
          {newsData.map((news, index) => (
            <Col key={index} md={4}>
              <NewsCard title={news.title} description={news.description} imageUrl={news.urlToImage} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default NewsList;
