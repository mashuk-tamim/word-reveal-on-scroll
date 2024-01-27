"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
	paragraph: string;
};

export default function Words({ paragraph }: Props) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 0.9", "0 0.25"],
	});
	const words = paragraph.split(" ");

	return (
		<p ref={ref} style={{}} className="flex flex-wrap">
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				// console.log([start, end]);
				const range = [start, end];
				return (
					<Word
						range={range}
						scrollYProgress={scrollYProgress}
						key={i}
					>
						{word}
					</Word>
				);
			})}
		</p>
	);
}
type WordProps = {
	children: string;
	range: number[];
	scrollYProgress: import("framer-motion").MotionValue<number>;
};
const Word = ({ children, range, scrollYProgress }: WordProps) => {
	const opacity = useTransform(scrollYProgress, range, [0, 1]);
	return (
		<span className="relative mr-3 mt-3">
			<span className="absolute opacity-20">{children}</span>
			<motion.span
				style={{
					opacity,
					transitionDuration: "0.2s",
				}}
				className="relative"
			>
				{children}
			</motion.span>
		</span>
	);
};
