import "./App.css";
export default function PostHeader({avatar, name, bio}) {
  return (
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
  );
}
