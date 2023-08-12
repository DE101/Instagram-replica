import './App.css';
import {logo} from './logo'
import {menu} from './menu'
function App() {
  return (
    <div className="container">
      <div className="side-bar">
        <logo></logo>
      </div>
      <div className="main-content"></div>
      <div className="right-side-bar"></div>
    </div>
  );
}

export default App;
