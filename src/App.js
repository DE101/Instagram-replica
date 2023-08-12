import './App.css';
import Logo from './LogoE';
import Menu from './Menu';

function App() {
  return (
    <div className="container">
      <div className="side-bar">
        <Logo></Logo>
        <div>
          <Menu></Menu>
        </div>
      </div>
      <div className="main-content"></div>
      <div className="right-side-bar"></div>
    </div>
  );
}

export default App;
