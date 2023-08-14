export default function PostMedia({postMedia, postMeta}) {
    return (
        <div class="post">
        <img
          src={postMedia}
          alt={postMeta}
        />
      </div>
    )
}