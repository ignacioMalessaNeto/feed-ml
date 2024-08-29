import style from "./Avatar.module.css";
import PropTypes from "prop-types"; //+

export function Avatar(props) {
  return (
    <img className={style.avatar} src={props.src} />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};
