import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render(<h1>Hello React!</h1>, document.getElementById("root"));

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Today's lunch menu {this.props.name}</h1>
        <p>・本日のおすすめメニュー　野菜スティック</p>
        <div>
          <img
            src="https://drive.google.com/uc?export=view&id=1vmQps6QLGIqNnwrUF7GtIVYvJOg4tLWg"
            alt=""
            width="800"
            height="600"
            border="0"
          ></img>
          <p></p>
        </div>

        <p>・ドリンクメニュー</p>
        <button className="att">
          <img
            src="https://drive.google.com/uc?export=view&id=1q96mVi2eZY3rQeVcf3ys6JOyhEWRb7yM"
            alt=""
            width="250"
            height="300"
            border="0"
          ></img>
          <p>コーラ</p>
        </button>

        <button className="ber">
          <img
            src="https://drive.google.com/uc?export=view&id=1bHlEl8V8u6Ax5AGWGkc5NTWzfvg8Ltjw"
            alt=""
            width="250"
            height="300"
            border="0"
          ></img>
          <p>ラムネ</p>
        </button>

        <button className="cet">
          <img
            src="https://drive.google.com/uc?export=view&id=1iuVwiIbAiyn2HSNtaAIAghWbomocvJ5N"
            alt=""
            width="250"
            height="300"
            border="0"
          ></img>
          <p>オレンジジュース</p>
        </button>

        <ul></ul>
      </div>
    );
  }
}

class Board extends React.Component {
  rendername() {
    return <ShoppingList name={"540円"} />;
  }
  render() {
    return <div className="name">{this.rendername()}</div>;
  }
}

class Splist extends React.Component {
  render() {
    return <Board />;
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Splist />);
