import style from "./Avatar.module.css";
import PropTypes from "prop-types";
export function Avatar({ hasBorder = true, src}) {
  return (
    <img className={hasBorder ? style.avatarWhithBorder : style.avatar} src={src} />//-
  );
}

Avatar.propTypes = {
  hasBorder: PropTypes.bool,
  src: PropTypes.string.isRequired,
};

