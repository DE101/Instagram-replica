import "./App.css";

export default function PostHeader({avatar, name, bio}) {
  return (
    <div class="header">
      <div class="profile">
        <img src={avatar} alt="" />
        <div class="title">
          <p class="text-bold">{name}</p>
          <p class="text">{bio}</p>
        </div>
      </div>
      <div class="footer">
        <span class="material-symbols-outlined"> heart_check </span>
        <span class="material-symbols-outlined"> send </span>
      </div>
    </div>
  );
}
