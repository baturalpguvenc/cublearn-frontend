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
				<Link href="/hesabim" className="btn btn-flat">
					Hesabım
				</Link>

				<ConnectButton />
			</div>
		</header>
	);
}
