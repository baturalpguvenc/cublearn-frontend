"use client";
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Container from '@/components/Container';

const Step = ({ step, completed, onClick }) => (
    <div className={styles.step} onClick={() => onClick()}>
        {completed ? '✅' : '◻️'} {step}
    </div>
);

const Home = () => {
    return (
        <div className={styles.container}>
            {/* Soldaki ders videosu */}
            <div className={styles.videoContainer}>
                {/* Video bileşeni veya iframe ekleyebilirsiniz */}
                <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.video}
                ></iframe>
            </div>

            {/* Sağdaki kurs içeriği */}
            <div className={styles.sidebar}>
                
                <div className={styles.courseContainer}>
                    <h2>Kurs İçeriği</h2>
                    <div className={styles.courseContent}>
                        <Step step="Adım 1" completed={false} onClick={() => {}} />
                        <Step step="Adım 2" completed={false} onClick={() => {}} />
                        <Step step="Adım 3" completed={false} onClick={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
