import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM here


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      saxeli: "ნიკოლოზ",
      gvari: "დოხნაძე"
    };
  }

  render() {
    return (
      <React.Fragment>
        <p className="text-primary m-5 text-center ">{this.state.saxeli + " " + this.state.gvari}</p>
      </React.Fragment>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
