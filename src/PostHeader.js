import "./App.css";

export default function PostHeader({avatar, name, bio}) {
  return (
    <div className="header">
      <div className="profile">
        <img src={avatar} alt="" />
        <div className="title">
          <p className="text-bold">{name}</p>
          <p className="text">{bio}</p>
        </div>
      </div>
      <div className="footer">
        <span className="material-symbols-outlined"> heart_check </span>
        <span className="material-symbols-outlined"> send </span>
      </div>
    </div>
  );
}
