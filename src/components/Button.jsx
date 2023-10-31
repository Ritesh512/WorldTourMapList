import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
};

export default Button;
