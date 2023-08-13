import './App.css';
import Logo from './LogoE';
import Menu from './Menu';
import Post from './Post'

function App() {
  return (
    <div className="container">
      <div className="side-bar">
        <Logo></Logo>
        <div>
          <Menu text="Home" icon="home"></Menu>
          <Menu text="Search" icon="search"></Menu>
          <Menu text="Explore" icon="explore"></Menu>
          <Menu text="Reels" icon="movie"></Menu>
          <Menu text="Messages" icon="message"></Menu>
          <Menu text="Notifications" icon="favorite"></Menu>
          <Menu text="Create" icon="add_box"></Menu>
          <Menu text="Profile" icon="account_circle"></Menu>
        </div>
      </div>
      <div className="main-content">
        <Post></Post>
      </div>
      <div className="right-side-bar"></div>
    </div>
  );
}

export default App;
