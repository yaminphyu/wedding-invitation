import React, { useContext } from "react";
import { IoHeart } from "react-icons/io5";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import styles from "@/styles/Header.module.css";

export default function Header({ customFont }) {
	const { toggle, setToggle } = useContext(MobileToggleContext);

	const handleChangeToggle = () => {
		setToggle(!toggle);
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div>
					<h1 className={`${styles["left-text"]} ${customFont.className}`}>
						Kaung{" "}
						<span className="text-primary pt-2">
							<IoHeart color="pink" />
						</span>{" "}
						Hanny
					</h1>
				</div>
				<div className={styles["right-div"]}>
					<h1 className={styles["right-text"]}>
						Sunday, 8<sup>th</sup> December 2024
					</h1>
				</div>
				<div className={styles["menu-icon-div"]}>
					{toggle ? (
						<FaXmark
							className={styles["menu-icon"]}
							onClick={handleChangeToggle}
						/>
					) : (
						<FaBars
							className={styles["menu-icon"]}
							onClick={handleChangeToggle}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
