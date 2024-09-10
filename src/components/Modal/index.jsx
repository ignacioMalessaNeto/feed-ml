import style from "./Modal.module.css";

export function Modal() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <h1>Delete comment?</h1>

        <p>You are do like delete this comment?</p>

        <div className={style.containerButtons}>
          <button className={style.buttonCancel}>Cancel</button>
          <button className={style.buttonConfirm}>Yes, delete</button>
        </div>
      </div>
    </div>
  );
}
