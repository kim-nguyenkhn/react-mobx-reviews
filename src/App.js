import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Reviews from "./components/Reviews";
import Store from "./store";

// Create single, global instance of store
const reviewStore = new Store();

class App extends Component {
  render() {
    /* TODO: Perhaps rethink how we are passing the store down to components, so we don't have to define it as a prop each time */
    return (
      <div className="container">
        <Form store={reviewStore} />
        <Dashboard store={reviewStore} />
        <Reviews store={reviewStore} />
      </div>
    );
  }
}

export default App;
