import Container from "@/components/Container";
import CourseGrid from "@/components/CourseGrid";
import { CATEGORIES, COURSES } from "@/mockData";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
	return (
		<main className={styles.root}>
			<Container>
				<div className={styles.categories}>
					{CATEGORIES.map((category) => (
						<Link
							key={category.id}
							href={`/kategoriler/${category.slug}`}
							className="btn btn-primary"
						>
							{category.name}
						</Link>
					))}
				</div>

				<section>
					<h1 className={styles.sectionTitle}>Çok Satanlar</h1>
					<CourseGrid courses={COURSES} />
				</section>
			</Container>
		</main>
	);
}
