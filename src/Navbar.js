/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Navbar.css";
export const Navbar = () => {
	return (
		<div>
			<div className="nav-box" style={{ color: "black" }}>
				<div className="nav-items">
					<p>Home</p>
				</div>
				<div className="nav-items">
					<p> About Us</p>
				</div>
				<div className="nav-items">
					<p> Products</p>
				</div>
				<div className="nav-items">
					<p> Blogs</p>
				</div>
				<div className="nav-items">
					<p> Team</p>
				</div>
				<div className="nav-items">
					<p>Sign-Up</p>
				</div>
				<div className="nav-items">
					<p>Login </p>
				</div>
				<object
					data="\images\lines.svg"
					alt=""
					title="obj"
					height="300px"
					width="300px"
					style={{ position: "absolute", paddingRight: "10px", zIndex: "-222" }}
				></object>
				<object
					data="\images\line2.svg"
					alt=""
					height="300px"
					width="300px"
					style={{
						position: "absolute",
						paddingTop: "300px",
						paddingRight: "900px",
						float: "right",
						zIndex: "-222",
					}}
				></object>
			</div>
		</div>
	);
};
