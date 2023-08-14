import "./App.css";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";



export default function Post({post}) {
  return (
    <div className="card">
      <PostHeader avatar={post.avatar} name={post.name} bio={post.bio}></PostHeader>
      <PostMedia postMediaLink={post.postMediaLink} postMeta={post.postMeta}></PostMedia>

      <div className="button">
        <span className="material-symbols-outlined"> more_horiz </span>
      </div>
      <div className="card">
        <div className="header">
          <div className="profile">
            <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="" />
            <div className="title">
              <p className="text-bold">John Doe</p>
              <p className="text">🥹 I am a fun teacher!</p>
            </div>
          </div>
          <div className="button">
            <span className="material-symbols-outlined"> more_horiz </span>
          </div>
        </div>

        <div className="post">
          <img
            src="https://live.staticflickr.com/8421/7814034218_1228cee7b0_z.jpg"
            alt=""
          />
        </div>
        <div className="footer">
          <span className="material-symbols-outlined"> heart_check </span>
          <span className="material-symbols-outlined"> send </span>
        </div>
      </div>
    </div>
  );
};
