/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "@/styles/OurStory.module.css";

export default function OurStorySection({ customFont }) {
	return (
		<section className={styles.wrapper} id="our-story">
			<div className={styles.container}>
				<h1 className={`${customFont.className} ${styles.title}`}>Our Story</h1>
				<div className={styles["main-container"]}>
					{/* Timeline */}
					<div className={styles["dot-line"]}>
						{/* Dot 1 - placed at 25% of the line */}
						<div className={`${styles.dot} top-[30%]`}></div>

						{/* Dot 2 - placed at 50% of the line */}
						<div className={`${styles.dot} top-[60%]`}></div>

						{/* Dot 3 - placed at 75% of the line */}
						<div className={`${styles.dot} top-[90%]`}></div>
					</div>

					{/* First Meet */}
					<div className={styles.item}>
						<div className={styles["text-right-label"]}>
							<h2 className={`${styles["main-text"]} ${customFont.className}`}>
								First Meet{" "}
							</h2>
							<p className={styles["main-date"]}>2013</p>
							<p className={styles["main-para"]}>
								Once strangers, we crossed paths by chance. But from the very
								first moment, something clicked, and we soon became friends.
								What started as simple hangouts and shared activities turned
								into countless memories. With each laugh, conversation, and
								adventure.
							</p>
						</div>
						<div className={styles["main-image-part"]}>
							<div className={styles["image-container"]}>
								<Image
									src={`/first-meet.jpg`}
									alt="First Meet Image"
									width={250}
									height={250}
									className={styles.image}
								/>
							</div>
						</div>
					</div>

					{/* First Date */}
					<div className={`${styles.item} ${styles["item-reverse"]}`}>
						<div className={styles["main-image-part"]}>
							<div className={styles["image-container"]}>
								<Image
									src={`/first-date.jpg`}
									alt="First Date Image"
									width={250}
									height={250}
									className={styles.image}
								/>
							</div>
						</div>
						<div className={styles["text-left-label"]}>
							<h2 className={`${styles["main-text"]} ${customFont.className}`}>
								First Date
							</h2>
							<p className={styles["main-date"]}>
								June 2<sup>nd</sup>, 2018
							</p>
							<p className={styles["main-para"]}>
								On our first date, we knew we had found something special in
								each other, feeling an undeniable connection. As we spent more
								time together, our bond deepened, blossoming into a love that
								felt truly unique — a love unlike any other.
							</p>
						</div>
					</div>

					{/* Marriage Proposal */}
					<div className={styles.item}>
						<div className={styles["text-right-label"]}>
							<h2 className={`${styles["main-text"]} ${customFont.className}`}>
								Our Engagement
							</h2>
							<p className={styles["main-date"]}>
								Feb 14<sup>th</sup>, 2024
							</p>
							<p className={styles["main-para"]}>
								Throughout our journey, we faced many ups and downs, but we
								never once thought about giving up on each other. Finally, we
								celebrated our engagement surrounded by our parents and loved
								ones. In that moment, we felt immense joy as we cherished this
								precious milestone together.
							</p>
						</div>
						<div className={styles["main-image-part"]}>
							<div className={styles["image-container"]}>
								<Image
									src={`/engagement.jpg`}
									alt="Engagement Image"
									width={250}
									height={250}
									className={styles.image}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
