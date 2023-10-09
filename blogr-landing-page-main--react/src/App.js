import React from 'react';
import './styles/common.scss'
import './styles/reset.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='wrapper'>

      <Header/>

      <Main/>

    </div>
);
}

export default App;
