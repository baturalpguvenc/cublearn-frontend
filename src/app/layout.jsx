import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CubLearn",
	description: "Blockchain tabanlı çevrimiçi eğitim platformu.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="tr">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
