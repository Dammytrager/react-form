import React from 'react';
import './App.css';
import TestForm from "./components/test-form";

function App() {
  return (
      <div className="d-flex h-100 w-100 justify-content-center align-items-center">
          <div className="jumbotron w-50">
              <h3 className="text-center mb-3">Form</h3>
              <TestForm />
          </div>
      </div>
  );
}

export default App;
