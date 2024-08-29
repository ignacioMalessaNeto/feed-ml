import styles from './Header.module.css';

import ignateLogo from '../assets/ignate-logo.svg';

export function Header() {
  return (
  <div className={styles.header}>
    <img src={ignateLogo} alt="logo ignate" />
    Ignate Feed
  </div>
);
}
