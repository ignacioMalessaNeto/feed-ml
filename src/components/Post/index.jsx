import style from "./Post.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { Tag } from "../Tag";
// import { Modal } from "../Modal";

import PropTypes from "prop-types";

export function Post(props) {
  const formattedDate = props.publishedAt.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article className={style.post}>
      <header className={style.header}>
        <div className={style.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={style.authorInf}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title="11 of may 2024" dateTime="2022-05-11 08:13:00">
          Published at {formattedDate}
        </time>
      </header>

      <div className={style.content}>
        <p>{props.content[0].title}</p>

        <p>{props.content[1].description}</p>

        <a href={props.content[2].link}>{props.content[2].link}</a>

        <div className={style.containTags}>
          {props.tags.map((tag) => {
            return <Tag title={tag.title} src={tag.link} key={tag.id} />;
          })}
        </div>
      </div>

      <form className={style.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a comment" className={style}></textarea>

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {props.comments.map((comment) => {
          return (
            <Comment
              author={comment.author}
              description={comment.description}
              applauses={comment.applauses}
              postedAt={comment.postedAt}
              key={comment.id}
            />
          );
        })}
      </div>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  tags: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
};
