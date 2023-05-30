import React,{ useState } from 'react';
import { DrawingPanel } from './components/DrawingPanel';
import { Editor } from './components/Editor';
import { Pixel } from './components/Pixel';
import { Row } from './components/Row';
import './App.css'

function App() {


  return (
    <>
      <div className="app">
        <Editor />
      </div>
    </>
  )
}

export default App
