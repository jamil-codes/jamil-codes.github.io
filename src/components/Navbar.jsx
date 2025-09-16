"use client";
import React, { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-base-100 border-b border-base-300 shadow-sm sticky top-0 z-50 backdrop-blur-md">
			<div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
				{/* Brand */}
				<h1 className="text-2xl font-bold tracking-tight text-base-content select-none transition-colors">
					Jamil <span className="text-primary">Codes</span>
				</h1>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center space-x-4">
					<a
						href="https://github.com/jamil-codes"
						target="_blank"
						className="text-base-content/80 hover:text-base-content transition-colors">
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/jamilcodes"
						target="_blank"
						className="text-base-content/80 hover:text-base-content transition-colors">
						LinkedIn
					</a>

					{/* Theme Toggle */}
					<label className="swap swap-rotate ml-2">
						<input
							type="checkbox"
							className="theme-controller"
							value="dark"
						/>
						{/* Sun */}
						<svg
							className="swap-on w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<circle
								cx="12"
								cy="12"
								r="4"
								strokeWidth="2"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
							/>
						</svg>
						{/* Moon */}
						<svg
							className="swap-off w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
							/>
						</svg>
					</label>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 rounded-md focus:outline-none hover:bg-base-200"
					onClick={() => setIsOpen(!isOpen)}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						{isOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-base-100 border-t border-base-300 shadow-lg">
					<div className="flex flex-col items-center py-4 space-y-4">
						<a
							href="https://github.com/jamil-codes"
							target="_blank">
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/jamilcodes"
							target="_blank">
							LinkedIn
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
