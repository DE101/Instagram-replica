import "./App.css";

export default function PostMedia({postMediaLink, postMeta}) {
    return (
        <div class="post">
        <img
          src={postMediaLink}
          alt={postMeta}
        />
      </div>
    )
}