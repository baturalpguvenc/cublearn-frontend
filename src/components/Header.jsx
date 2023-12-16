// Header.js
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.root}>
			<Link className={styles.brand} href="/">
				<span>Cub</span>
				<span className="fg-accent">Learn</span>
			</Link>

			<div className={styles.nav}>
				{/* Arama butonu ekleniyor */}
				<div className={styles.search}>
					<input className={styles["search-input"]} type="text" placeholder="Ara..." />
					<button className={styles["search-button"]} type="button">
						Ara
					</button>
				</div>

				<Link href="/hesabim" className="btn btn-flat">
					Hesabım
				</Link>

				<ConnectButton />
			</div>
		</header>
	);
}
