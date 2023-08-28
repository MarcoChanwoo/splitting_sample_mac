import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Component, Suspense, useState } from "react";
const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  // class App extends Component {
  //   state = {
  //     SplitMe: null,
  //   };
  //   handleClick = async () => {
  //     const loadedModule = await import("./SplitMe");
  //     this.setState({
  //       SplitMe: loadedModule.default,
  //     });
  //   };
  //   render() {
  //     const { SplitMe } = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hellooo React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
