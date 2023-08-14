import "./App.css";

export default function PostMedia({postMediaLink, postMeta}) {
    return (
        <div className="post">
        <img
          src={postMediaLink}
          alt={postMeta}
        />
      </div>
    )
}