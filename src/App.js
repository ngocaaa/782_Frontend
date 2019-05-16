import React from 'react';
import './App.css';
// import Carousel from './components/carousel';
import Test from './components/test';
// import { WSAVERNOTSUPPORTED, WSAEBADF } from 'constants';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div class="col s12 m6 l7">
          <Test />
        </div>
        <div class="col s12 m6 l5">
          <div id="info-1" class="row">
            <h6>LiveUp</h6>
            <h1>Why Us?</h1>
          </div>
          <div id="info-2" class="row">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;