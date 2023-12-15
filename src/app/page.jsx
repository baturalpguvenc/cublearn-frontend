import Container from "@/components/Container";
import CourseGrid from "@/components/CourseGrid";
import { COURSES } from "@/mockData";
import styles from "./page.module.css";

export default function HomePage() {
	return (
		<main className={styles.root}>
			<Container>
				<section>
					<h1 className={styles.sectionTitle}>Çok Satanlar</h1>
					<CourseGrid courses={COURSES} />
				</section>
			</Container>
		</main>
	);
}
