import style from './Tag.module.css';
import PropTypes from "prop-types";

export function Tag(props){
  return (
  <a className={style.tag} src={props.src}>{props.title}</a>
  )
}

Tag.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}