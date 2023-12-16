import Container from "@/components/Container";
import CourseGrid from "@/components/CourseGrid";
import { COURSES } from "@/mockData";
import styles from "./page.module.css";

export default function CategoryPage({ params }) {
	const filteredCourses = COURSES.filter(
		(course) => course.category.slug === params.categorySlug
	);

	if (filteredCourses.length === 0) {
		return (
			<main className={styles.root}>
				<Container>
					<section>
						<div>
							<h1 className={styles.sectionTitle}>
								Bu kategoriye ait kurs bulunamadı.
							</h1>
						</div>
					</section>
				</Container>
			</main>
		);
	}

	return (
		<main className={styles.root}>
			<Container>
				<section>
					<div>
						<h1 className={styles.sectionTitle}>{params.categorySlug}</h1>
						<h2 className={styles.sectionTitle}>Çok Satanlar</h2>
						<CourseGrid courses={filteredCourses} />
					</div>
				</section>
			</Container>
		</main>
	);
}
