import { formatPrice } from "@/utils";
import Link from "next/link";
import styles from "./CourseGridItem.module.css";

export default function CourseGridItem({ course }) {
	return (
		<Link href={`/kurslar/${course.id}`} className={styles.root}>
			<img className={styles.image} src={course.imageUrl} alt="Kurs resmi" />
			<div className={styles.body}>
				<span className={styles.name}>{course.name}</span>
				<span>{formatPrice(course.price)}</span>
			</div>
		</Link>
	);
}
