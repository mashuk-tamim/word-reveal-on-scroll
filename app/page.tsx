"use client";
import Paragraph from "./components/Paragraph";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Words from "./components/Words";
const paragraph =
	"Hello, I'm Mashuk Tamim, an Associate Software Engineer at Uqidev. My passion lies in crafting seamless user interfaces, staying at the forefront of industry trends to deliver innovative solutions. Let's shape the future of the web together!";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();
		function raf(time:any ) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
    },[])
	return (
		<main className="max-w-7xl mx-auto text-4xl p-5 tracking-wide text-justify">
			<div style={{ height: "100vh" }}></div>
			<Paragraph paragraph={paragraph}></Paragraph>
            <div className="h-[100vh]"></div>
            <Words paragraph={paragraph}></Words>
            <div className="h-[100vh]"></div>
		</main>
	);
}