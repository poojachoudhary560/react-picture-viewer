import React from 'react';
import './style.css';
import Picture from './components/Picture';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Picture />
      <Gallery />
    </div>
  );
}
