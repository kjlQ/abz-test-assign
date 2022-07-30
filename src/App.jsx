import React, {useRef, useState} from "react";
import './App.scss';
import Header from "./components/Header";
import Info from "./components/Info";
import GetRequest from "./components/GetRequest";
import PostRequest from "./components/PostRequest";

function App() {
    const usersRef = useRef(null);
    const registrationRef = useRef(null);
    const [created , setCreated] = useState(false)

    return (
        <div className="App">
          <Header usersRef={usersRef} registrationRef={registrationRef} />
          <Info registrationRef={registrationRef} />
          <div className="container">
              <GetRequest created={created} setCreated={setCreated} usersRef={usersRef} />
              <PostRequest created={created} setCreated={setCreated} registrationRef={registrationRef} />
          </div>
        </div>
  )
}

export default App;
