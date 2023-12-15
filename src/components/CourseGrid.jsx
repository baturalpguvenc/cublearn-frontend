import styles from "./CourseGrid.module.css";
import CourseGridItem from "./CourseGridItem";

export default function CourseGrid({ courses }) {
	return (
		<div className={styles.root}>
			{courses &&
				courses.map((course) => (
					<CourseGridItem key={course.id} course={course} />
				))}
		</div>
	);
}
