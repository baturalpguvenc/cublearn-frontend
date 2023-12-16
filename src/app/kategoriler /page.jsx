import Container from "@/components/Container";
import styles from "./page.module.css";
import { COURSES } from "@/mockData";
import { formatPrice } from "@/utils";
import CourseGrid from "@/components/CourseGrid";

export default function CategoryPage({ params }) {
  // Seçilen kategoriye göre kursları filtrele
  const filteredCourses = COURSES.filter(
    (course) => course.category.slug === params.categorySlug
  );

  // Eğer filtrelenen kurslar boşsa, isteğe bağlı bir mesaj gösterebilirsiniz
  if (filteredCourses.length === 0) {
    return (
      <main className={styles.root}>
        <Container>
          <section>
            <div>
              <h1 className={styles.sectionTitle}>Bu kategoriye ait kurs bulunamadı.</h1>
            </div>
          </section>
        </Container>
      </main>
    );
  }

  // Filtrelenen kurslar varsa, her bir kurs için ayrı bir blok oluşturun
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
