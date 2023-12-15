import styles from "./Container.module.css";

export default function Container({ children }) {
	return <div className={styles.root}>{children}</div>;
}
