"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
	const skills = [
	  "HTML",
	  "CSS",
	  "JavaScript",
	  "SQL",
	  "Django",
	  "DRF",
	  "Next.js",
	  "TailwindCSS",
	  "Flowbite",
	  "DaisyUI",
	  "Stripe"
	];


	const projects = [
		{
		    title: "🎟️ Eventify — Event Management Platform",
		    description:
		      "A modern event management system built with Django and DRF. Enables users to discover, create, and manage events with advanced filtering, registration, and ticketing features.",
		    link: "https://github.com/jamil-codes/Eventify-Django-Event-Management",
	  },
		{
	    title: "🛒 ShopEasy — Django E-Commerce",
	    description:
	      "A full-stack e-commerce platform built with Django REST Framework and SQL. Integrated with Stripe for payments, includes product management, authentication, and a responsive design.",
	    link: "https://github.com/jamil-codes/ShopEasy-Django-E-Commerce-with-Stripe",
	  },
	  	{
	    title: "📝 IBlog — Django Blog Platform",
	    description:
	      "A blogging web app built with Django, featuring post creation, categories, user authentication, and a clean responsive layout.",
	    link: "https://github.com/jamil-codes/IBlog-Django",
	  },
	  	{
	    title: "💰 BudgetWise — Django Expense Tracker",
	    description:
	      "A personal finance management app built with Django. Allows users to track income, categorize expenses, view reports, and manage budgets with a simple, intuitive interface.",
	    link: "https://github.com/jamil-codes/BudgetWise-Django",
	  },
	  	{
	    title: "🎨 Tonalize — Color Palette Generator",
	    description:
	      "A web app built with Next.js and TypeScript that generates harmonious color palettes for designers and developers. Features palette customization, preview, and export options.",
	    link: "https://github.com/jamil-codes/Tonalize",
	  },
	];


	const experience = [
		{
			role: "Full-Stack Web Developer",
			company: "Freelancer",
			period: "2024 - Present",
			description: "Building Django + Next.js projects, integrating Stripe and SQL databases, creating responsive and user-friendly web applications.",
		},
	];

	const certifications = [
		{
			name: "CS50: Web Programming with Python and JavaScript (CS50W)",
			institution: "Harvard University / edX",
			year: 2024,
			description: "Web development with Django, Python, JavaScript, HTML, CSS, SQL; built projects, worked on real-world app features.",
		},
		{
			name: "CS50: Introduction to Computer Science (CS50x)",
			institution: "Harvard University",
			year: 2024,
			description: "Core computer science concepts: algorithms, C programming, memory, data structures, problem solving.",
		},
		{
			name: "Digital Video Editor (DVE)",
			institution: "Some Platform / Organization",
			year: 2023,
			description: "Video editing fundamentals, post-production, tools usage, storytelling via video.",
		},
		{
			name: "Advanced Search Engine Optimization",
			institution: "Some Platform / Organization",
			year: 2023,
			description: "SEO best practices, keyword research, analytics, content optimization.",
		},
		{
			name: "Introduction to Programming Using Block-Based Languages",
			institution: "Some Platform / Organization",
			year: 2022,
			description: "Visual programming languages (e.g. Scratch), logic, basics of algorithms.",
		},
		{
			name: "IC3 Digital Literacy Certification",
			institution: "IC3",
			year: 2022,
			description: "Fundamental digital skills: computer usage, internet, basic applications, online safety.",
		},
	];

	// Animations
	const ref = useRef(null);
	const fadeUp = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};
	const staggerContainer = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.15 } },
	};
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className="w-full bg-base-100 text-base-content">
			<Navbar />

			{/* Hero */}
			<section
				ref={ref}
				className="relative min-h-[65dvh] py-24 flex flex-col justify-center items-center text-center px-6 overflow-hidden">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeUp}
					className="relative z-10 max-w-4xl">
					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-base-content">
						Hi, I’m <span className="text-primary">Jamil</span> 👋
					</h1>
					<p className="text-xl md:text-2xl mb-10 text-base-content/70 leading-relaxed">
						Full-Stack Web Developer · Django REST + Next.js · SQL Enthusiast
					</p>
					<div className="flex gap-4 justify-center">
						<a
							href="https://github.com/jamil-codes"
							target="_blank"
							className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow hover:shadow-lg hover:bg-primary/90 transition">
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/jamilcodes"
							target="_blank"
							className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition">
							LinkedIn
						</a>
					</div>
				</motion.div>
			</section>

			{/* About */}
			<section className="py-24 px-6 bg-base-100 border-t border-base-300">
				<div className="max-w-5xl mx-auto text-center">
					<motion.h2
						initial="hidden"
						whileInView="visible"
						variants={fadeUp}
						viewport={{ once: true }}
						className="text-4xl font-bold mb-6">
						About Me
					</motion.h2>
					<p className="text-lg leading-relaxed text-base-content/80">
						I am a passionate full-stack web developer focused on building scalable, secure, and user-friendly applications. 
						I love clean code, optimized databases, and seamless user experiences. 
						Django REST Framework and Next.js are my main tools of choice.
					</p>
				</div>
			</section>

			{/* Skills */}
			<section className="py-24 px-6 bg-base-200/60 border-t border-base-300">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-10">Skills</h2>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}
						className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
						{skills.map((skill) => (
							<motion.div
								key={skill}
								variants={cardVariants}
								whileHover={{ scale: 1.1, rotate: 3 }}
								className="p-6 rounded-lg bg-base-100 font-semibold shadow hover:shadow-xl transition cursor-pointer">
								{skill}
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Projects */}
			<section className="py-24 px-6 bg-base-100 border-t border-base-300">
				<div className="max-w-5xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-10">Projects</h2>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-8">
						{projects.map((project) => (
							<motion.div
								key={project.title}
								variants={cardVariants}
								whileHover={{ rotateY: 5, rotateX: -3, scale: 1.03 }}
								className="p-6 rounded-xl bg-base-200/70 backdrop-blur-lg shadow-lg hover:shadow-2xl transition text-left">
								<h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
								<p className="mb-6 text-base-content/70">{project.description}</p>
								<a
									href={project.link}
									target="_blank"
									className="inline-block px-5 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition">
									View Code →
								</a>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Experience */}
			<section className="py-24 px-6 bg-base-200/60 border-t border-base-300">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-10">Experience</h2>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}>
						{experience.map((exp) => (
							<motion.div
								key={exp.role}
								variants={cardVariants}
								whileHover={{ scale: 1.05 }}
								className="p-6 rounded-lg bg-base-100 shadow hover:shadow-md transition mb-6 text-left">
								<h3 className="text-2xl font-semibold">{exp.role}</h3>
								<span className="text-base-content/60 block">
									{exp.company} | {exp.period}
								</span>
								<p className="mt-3 text-base-content/80">{exp.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Certifications */}
			<section className="py-24 px-6 bg-base-100 border-t border-base-300">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-10">Certifications</h2>
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}>
						{certifications.map((cert) => (
							<motion.div
								key={cert.name}
								variants={cardVariants}
								whileHover={{ scale: 1.05 }}
								className="p-6 rounded-lg bg-base-200 shadow hover:shadow-md transition mb-6 text-left">
								<h3 className="text-2xl font-semibold">{cert.name}</h3>
								<span className="text-base-content/60 block">
									{cert.institution} | {cert.year}
								</span>
								<p className="mt-3 text-base-content/80">{cert.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Contact */}
			<section className="py-24 px-6 text-center bg-base-200/60 border-t border-base-300">
				<h2 className="text-4xl font-bold mb-6">Contact Me</h2>
				<p className="mb-6 text-base-content/70 max-w-2xl mx-auto">
					Reach out via GitHub or LinkedIn.
				</p>
				<div className="flex gap-4 justify-center">
					<a
						href="https://github.com/jamil-codes"
						target="_blank"
						className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/jamilcodes"
						target="_blank"
						className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition">
						LinkedIn
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 border-t border-base-300 bg-base-100">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<p className="text-sm text-base-content/70">
						© {new Date().getFullYear()} <span className="font-semibold">Jamil Codes</span> · Built with Next.js & TailwindCSS
					</p>
				</div>
			</footer>
		</div>
	);
}
