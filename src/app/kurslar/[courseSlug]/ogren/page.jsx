"use client";

import { CubLearn } from "@/contracts";
import { COURSES } from "@/mockData";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import styles from "./page.module.css";

const Step = ({ label }) => {
	const [isCompleted, setIsCompleted] = useState(false);

	return (
		<div className={styles.step} onClick={() => setIsCompleted((val) => !val)}>
			<input type="checkbox" checked={isCompleted} />
			<span style={{ marginLeft: "0.5rem" }}>{label}</span>
		</div>
	);
};

const LearnPage = ({ params }) => {
	const course = COURSES.find((c) => c.slug === params.courseSlug);

	const { config: finishCourseConfig } = usePrepareContractWrite({
		address: CubLearn.address,
		abi: CubLearn.abi,
		functionName: "finishCourse",
		args: [
			course.id,
			"Osman Nuri Yıldız",
			"Akıllı Kontrat Güvenliği",
			"Atıl Samancıoğlu",
		],
	});
	const finishCourse = useContractWrite(finishCourseConfig);

	return (
		<div className={styles.container}>
			<div className={styles.videoContainer}>
				<iframe
					src="https://www.youtube.com/embed/r3P58Y1OL0g"
					// frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
					className={styles.video}
				></iframe>
			</div>

			<div className={styles.sidebar}>
				<div className={styles.courseContainer}>
					<h2>Kurs İçeriği</h2>
					<div className={styles.courseContent}>
						<Step label="1. Blokzincir Nedir?" />
						<Step label="2. Kullanım Alanları" />
						<Step label="3. Ethereum Nedir?" />
						<Step label="4. Akıllı Kontratlar" />
						<Step label="5. Solidity Programlama Dili" />
					</div>
				</div>

				<button
					type="button"
					className="btn btn-primary"
					style={{
						marginTop: "2rem",
						marginLeft: "auto",
						marginRight: "auto",
						display: "block",
					}}
					onClick={() => finishCourse.write?.()}
				>
					Sertifikayı Al
				</button>
			</div>
		</div>
	);
};

export default LearnPage;
