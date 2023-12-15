import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.root}>
			<div className={styles.brand}>
				<span>Cub</span>
				<span className="fg-accent">Learn</span>
			</div>
			<ConnectButton />
		</header>
	);
}
