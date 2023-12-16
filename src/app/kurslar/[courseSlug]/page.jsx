import Container from "@/components/Container";
import { COURSES } from "@/mockData";
import { cn, formatPrice } from "@/utils";
import Link from "next/link";
import styles from "./page.module.css";

export default function CourseDetailPage({ params }) {
	const course = COURSES.find((c) => c.slug === params.courseSlug);

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
						{true ? (
							<Link
								href={`/kurslar/${params.courseSlug}/ogren`}
								className={cn(styles.button, "btn btn-primary")}
							>
								Eğitime Başla
							</Link>
						) : (
							<button className={cn(styles.button, "btn btn-primary")}>
								Satın Al: {formatPrice(course.price)}
							</button>
						)}
					</div>
				</div>

				<p className={styles.description}>{course.description}</p>
			</Container>
		</main>
	);
}
