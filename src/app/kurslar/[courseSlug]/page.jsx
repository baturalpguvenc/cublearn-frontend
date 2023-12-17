"use client";

import Container from "@/components/Container";
import { CubLearn } from "@/contracts";
import { COURSES } from "@/mockData";
import { cn, formatPrice } from "@/utils";
import Link from "next/link";
import { useContractRead, useContractWrite, useWalletClient } from "wagmi";
import styles from "./page.module.css";

export default function CourseDetailPage({ params }) {
	const { data: walletClient } = useWalletClient();

	const course = COURSES.find((c) => c.slug === params.courseSlug);

	const amIEnrolledInCourse = useContractRead({
		address: CubLearn.address,
		abi: CubLearn.abi,
		functionName: "amIEnrolledInCourse",
		args: [course.id],
		account: walletClient?.account,
	});

	const enroll = useContractWrite({
		address: CubLearn.address,
		abi: CubLearn.abi,
		functionName: "enroll",
		args: [course.id],
	});

	return (
		<main className={styles.root}>
			<Container>
				<div className={styles.columns}>
					<img
						className={styles.image}
						src={course.imageUrl}
						alt="Kurs resmi"
					/>
					<div>
						<h1>{course.name}</h1>
						<div>{course.instructor.name}</div>
						{amIEnrolledInCourse.data ? (
							<Link
								href={`/kurslar/${params.courseSlug}/ogren`}
								className={cn(styles.button, "btn btn-primary")}
							>
								Eğitime Başla
							</Link>
						) : (
							<button
								className={cn(styles.button, "btn btn-primary")}
								disabled={!enroll.write}
								onClick={() => enroll.write?.()}
							>
								Satın Al: {formatPrice(course.price)}
							</button>
						)}
					</div>
				</div>

				<p className={styles.description}>{course.description}</p>
			</Container>
		</main>
	);
}
