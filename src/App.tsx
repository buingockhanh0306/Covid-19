import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Component/Table';
import Tag from './Component/Tag';

function App() {
  return (
    <div className="container-fluid">
        <Tag />
      <div className='row'>
        <Table />
      </div>
    </div>
  );
}

export default App;
