import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/ignacioMalessaNeto.png"
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAdnTime}>
              <strong>Ignacio Malessa</strong>

              <time title="11 of may 2024" dateTime="2022-05-11 08:13:00">
                about 1 h ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
