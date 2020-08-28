import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

 
function App(){
  return (
    <div>
        <h1>Nhok phal</h1>
        <p>This is my first react!</p>
          <ul>
          <li>1 My first task is to create react site</li>
          <li>2 Then i will create my own applicaton </li>
          <li>3 and deploy a business for my business in the future</li>
          </ul>
        <nav>
          </nav>
            <main>This is where my items go..
            </main>   
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"))

export default App;
