import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Alert } from "react-bootstrap/Alert";
// import Alert from "react-bootstrap/Alert";
import MyNav from "./component/componentNav";
import MyFooter from "./component/componentFooter";
import MyCard from "./component/myCard";
import MyAlert from "./component/componentAlert";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <div>
        <MyAlert />
      </div>
      <main>
        <MyCard />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
