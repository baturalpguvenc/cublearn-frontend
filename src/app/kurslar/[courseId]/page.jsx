import Container from "@/components/Container";
import { COURSES } from "@/mockData";
import { cn, formatPrice } from "@/utils";
import styles from "./page.module.css";

export default function CourseDetailPage({ params }) {
	const course = COURSES.find((c) => c.id === params.courseId);

	return (
		<main className={styles.root}>
			<Container>
				<div className={styles.columns}>
					<img
						className={styles.image}
						src={course.imageUrl}
						alt="Kurs resmi"
					/>
					<div>
						<h1>{course.name}</h1>
						<div>{course.instructor.name}</div>
						<button className={cn(styles.buyButton, "btn")}>
							Satın Al: {formatPrice(course.price)}
						</button>
					</div>
				</div>

				<p className={styles.description}>{course.description}</p>
			</Container>
		</main>
	);
}