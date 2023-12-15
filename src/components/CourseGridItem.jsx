import styles from "./CourseGridItem.module.css";

export default function CourseGridItem({ course }) {
	return (
		<div className={styles.root}>
			<span>{course.name}</span>
		</div>
	);
}
