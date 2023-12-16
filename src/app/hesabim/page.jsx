import Container from "@/components/Container";
import styles from "./page.module.css";

export default function MyAccountPage() {
	return (
		<main className={styles.root}>
			<Container>
				<h1 className="page-title">Hesabım</h1>

				<form className={styles.form}>
					<div className="input-group">
						<label htmlFor="first-name">Ad</label>
						<input className="input" type="text" id="first-name" />
					</div>

					<div className="input-group">
						<label htmlFor="last-name">Soyad</label>
						<input className="input" type="text" id="last-name" />
					</div>

					<div className="input-group">
						<label htmlFor="email">E-posta adresi</label>
						<input className="input" type="email" id="email" />
					</div>

					<button className="btn btn-primary" type="submit">
						Kaydet
					</button>
				</form>
			</Container>
		</main>
	);
}
