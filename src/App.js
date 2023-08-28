import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Component, Suspense, useState } from "react";
import loadable from "@loadable/component";
const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
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
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hellooo React!
        </p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
