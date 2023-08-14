export default function FollowBack(props) {
    return (
    <div className="profile">
      <img src={props.avatar} alt="" />
      <div className="title">
        <p className="text-bold">{props.name}</p>
        <p className="text muted-text">follows you</p>
      </div>
    </div>
    )
};