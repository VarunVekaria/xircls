import React, { useState } from "react";
import "./Landing.css";
import { motion } from "framer-motion";

export const Landing = () => {
	const [rotate, setRotate] = useState(false);
	return (
		<motion.div drag dragConstraints={{ left: 50, right: 0 }} className="box">
			<motion.div
				animate={{ x: "10px" }}
				whileHover={{ scale: 1.05 }}
				className="inner-box"
				style={{ paddingLeft: "150px", paddingTop: "5px" }}
			>
				<h1 style={{ color: "black" }}>XIRCLS</h1>
				<h3 style={{ padding: "-20px 0px 0px 0px", fontWeight: 100 }}>
					<span style={{ color: "#eb774d", fontWeight: 300 }}>
						Web3 of Markweting
					</span>
					-tech{" "}
				</h3>
				<p style={{ maxWidth: "500px", fontSize: "2rem", color: "black" }}>
					Your customers stay yours and yours alone.
					<br></br>
					<br></br>
					Say hello to Always-On marketing network.
				</p>
			</motion.div>
			<motion.div className="inner-box" whileHover={{ scale: 1.05 }}>
				<motion.object
					drag
					dragConstraints={{ left: 100 }}
					animate={{ x: [0, 100, 0] }}
					transition={{ duration: 8, repeat: Infinity }}
					onClick={() => {
						setRotate(!rotate);
					}}
					data="https://www.xircls.com/static/images/website-slide/logo12.jpg"
					alt=""
					height="300px"
					width="300px"
					style={{
						borderRadius: "20%",
						paddingRight: "150px",
						backgroundColor: "#fff",
					}}
				></motion.object>
			</motion.div>
		</motion.div>
	);
};
