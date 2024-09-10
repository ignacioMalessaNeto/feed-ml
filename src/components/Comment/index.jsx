import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";
import PropTypes from "prop-types";

export function Comment(props) {
  // const [modalOpen, setModalOpen]= useState(true);
  const [ applauses, setApplauses] = useState(props.applauses);
  const [hasApplauded, setHasApplauded] = useState(false);

  const handleApplaud = () => {
    if (!hasApplauded) {
      setApplauses(applauses + 1);
      setHasApplauded(true); // Evita que o usuário curta mais de uma vez
    } else {
      setApplauses(applauses - 1);
      setHasApplauded(false);
    }
  };

  const formattedDate = props.postedAt.toLocaleDateString('en', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src={props.author.avatarUrl}
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAdnTime}>
              <strong>{props.author.name}</strong>

              <time title="11 of may 2024" dateTime="2022-05-11 08:13:00">
                about {formattedDate}
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.description}</p>
        </div>

        <footer>
          <button 
          className={hasApplauded ?  style.buttonApplause : style.buttonNotApplause} 
          onClick={handleApplaud}
          >
            <button className={hasApplauded ? style.buttonTrash : style.buttonTrashNotApplause}><ThumbsUp /></button>
            Aplaudir <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  postedAt: PropTypes.instanceOf(Date).isRequired,
  applauses: PropTypes.number.isRequired,
};