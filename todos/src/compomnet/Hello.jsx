import styles from "../hello.module.css";

function Hello() {
  return (
    <div className={`${styles.container} ${styles.big}`}>
      <h1>hello React</h1>
    </div>
  );
}

export default Hello;
