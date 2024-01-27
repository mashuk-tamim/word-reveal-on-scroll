"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
    paragraph: string;
}

export default function Paragraph({paragraph}: Props) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "0 0.25"],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return (
			<motion.p
				ref={ref}
				style={{
					opacity: opacity,
				}}
			>
				{paragraph}
			</motion.p>
	);
}
