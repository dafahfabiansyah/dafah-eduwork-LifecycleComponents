import React from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={this.state.searchTerm} onChange={this.handleInputChange} />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
