import style from "./Post.module.css";
import { Comment } from "../components/Comment.jsx";
import { Avatar } from "./Avatar.jsx";

export function Post() {
  return (
    <article className={style.post}>
      <header className={style.header}>
        <div className={style.author}>
          <Avatar src="https://github.com/ignacioMalessaNeto.png" />
          <div className={style.authorInf}>
            <strong>Ignacio Malessa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 of may 2024" dateTime="2022-05-11 08:13:00">
          Published at 1h
        </time>
      </header>

      <div className={style.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            <a href="#">ignacio.malessa/doctorcare</a>
          </p>

          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>{" "}
          </p>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a comment" className={style}></textarea>

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
