import "./App.css";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";



export default function Post({post}) {
  return (
    <div className="card">
      <PostHeader avatar={post.avatar} name={post.name} bio={post.bio}></PostHeader>
      <PostMedia postMediaLink={post.postMediaLink} postMeta={post.postMeta}></PostMedia>

      <div class="button">
        <span class="material-symbols-outlined"> more_horiz </span>
      </div>
      <div class="card">
        <div class="header">
          <div class="profile">
            <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="" />
            <div class="title">
              <p class="text-bold">John Doe</p>
              <p class="text">🥹 I am a fun teacher!</p>
            </div>
          </div>
          <div class="button">
            <span class="material-symbols-outlined"> more_horiz </span>
          </div>
        </div>

        <div class="post">
          <img
            src="https://live.staticflickr.com/8421/7814034218_1228cee7b0_z.jpg"
            alt=""
          />
        </div>
        <div class="footer">
          <span class="material-symbols-outlined"> heart_check </span>
          <span class="material-symbols-outlined"> send </span>
        </div>
      </div>
    </div>
  );
};
