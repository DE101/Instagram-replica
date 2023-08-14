import './App.css';
import Logo from './LogoE';
import Menu from './Menu';
import Post from './Post';
import FollowBack from './FollowBack';

function App() {
  const followersList = [
    {
      name: "Kaiser",
      avatar: "https://orig00.deviantart.net/8384/f/2007/302/0/9/random_head_profile_by_kurvos.png"
    },
    {
      name: "Sheeran",
      avatar: "https://i.imagesup.co/images2/42736a080ed7a88afcf537cb6309cbe3d037e878.jpg"
    },
    {
      name: "Kaiser",
      avatar: "https://orig00.deviantart.net/8384/f/2007/302/0/9/random_head_profile_by_kurvos.png"
    },
    {
      name: "Sheeran",
      avatar: "https://i.imagesup.co/images2/42736a080ed7a88afcf537cb6309cbe3d037e878.jpg"
    }
  ]
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
      <div className="right-side-bar">
        {
          followersList.map((follower)=>{
            return (
              <FollowBack
                avatar={follower.avatar}
                name={follower.name}
                ></FollowBack>
            )
          })
        }
        {/* <FollowBack avatar="https://orig00.deviantart.net/8384/f/2007/302/0/9/random_head_profile_by_kurvos.png" name="Kaiser"></FollowBack>
        <FollowBack avatar="https://i.imagesup.co/images2/42736a080ed7a88afcf537cb6309cbe3d037e878.jpg" name="Sheeran"></FollowBack> */}
      </div>
    </div>
  );
}

export default App;
