import Link from "next/link";
import Container from "@/components/Container";
import CourseGrid from "@/components/CourseGrid";
import { CATEGORIES, COURSES } from "@/mockData";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.root}>
      <Container>
        {/* Kategorilerin buton gibi yan yana dizilmiş hali */}
        <div className={styles.categories}>
          {CATEGORIES.map((category) => (
            <Link key={category.slug} href={`/kategoriler/${category.slug}`}>
              <div className={styles.categoryButton}>
                <span>{category.name}</span>
              </div>
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
