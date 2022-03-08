import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Buttons.css";

export default function Buttons() {
	return (
		<div className="buttons">
			<a href="mailto:zarhabuske@hotmail.com">
				<button className="button email">
					{<FaEnvelope className="email-icon" />}
					<p>Email</p>
				</button>
			</a>
			<a href="https://linkedin.com/in/zarhabuske">
				<button className="button linkedin">
					{<FaLinkedin className="linkedin-icon" />}
					LinkedIn
				</button>
			</a>
		</div>
	);
}
