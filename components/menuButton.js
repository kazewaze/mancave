import styles from './styles/menuButton.module.css';
import classes from '../lib/classes';

export default function MenuButton() {
  return (
    <>
      <input type="checkbox" className={styles.openMobileMenu} id={styles.openMobileMenu} />
        <label htmlFor={styles.openMobileMenu} className={styles.mobileIconToggle}>
          <span className={classes(styles, ["spinner", "diagonal", "one"])}></span>
          <span className={classes(styles, ["spinner", "horizontal"])}></span>
          <span className={classes(styles, ["spinner", "diagonal", "two"])}></span>
        </label>
    </>
  )
}