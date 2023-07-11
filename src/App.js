import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './navbar/Navbar';
import NewsList from './news/NewsList';

function App() {
  return (
    <div>
      <NavScrollExample></NavScrollExample>
      <NewsList />
    </div>
  );
}

export default App;
