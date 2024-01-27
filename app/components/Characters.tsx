"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
	paragraph: string;
};

export default function Characters({ paragraph }: Props) {
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
type wordProps = {
	children: string;
	range: number[];
	scrollYProgress: import("framer-motion").MotionValue<number>;
};
const Word = ({ children, range, scrollYProgress }: wordProps) => {
	const characters = children.split("");
	const amount = range[1] - range[0];
	const step = amount / children.length;
	return (
		<span className="relative mr-3 mt-3">
			{characters.map((character, i) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				// console.log([start, end])
				return (
					<Character
						range={[start, end]}
						scrollYProgress={scrollYProgress}
						key={i}
					>
						{character}
					</Character>
				);
			})}
		</span>
	);
};

type CharacterProps = {
	children: string;
	range: number[];
	scrollYProgress: import("framer-motion").MotionValue<number>;
};
const Character = ({ children, range, scrollYProgress }: CharacterProps) => {
	const opacity = useTransform(scrollYProgress, range, [0, 1]);
	return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
			<motion.span
				style={{
					opacity,
				}}
			>
				{children}
			</motion.span>
		</span>
	);
};
