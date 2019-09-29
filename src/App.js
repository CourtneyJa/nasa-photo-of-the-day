import React from "react";
import styled from 'styled-components';
import "./App.css";
import NasaPhoto from "./Components/nasacard";
import "./index.css";

const NasaDiv = styled.div`
background-image: url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')`

function App() {
  return (
    <NasaDiv className="App">
      <NasaPhoto/>
    </NasaDiv>
  );
}

export default App;

