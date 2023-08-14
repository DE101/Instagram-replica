export default function FollowBack(props) {
    return (
    <div className="profile">
      <img src={props.avatar} alt="" />
      <div class="title">
        <p class="text-bold">{props.name}</p>
        <p class="text muted-text">{props.name}</p>
      </div>
    </div>
    )
};