import React from "react";

function About() {
	return (
		<div className="w-11/12 mx-auto mt-36 text-white p-5">
			<div>
				<h1 className="text-xl sm:text-2xl font-medium">
					<span className="border-b-4 border-red-400 ">What</span> is Pomodoro
					Technique?
				</h1>
				<p className="mt-5 tracking-wide opacity-70 text-lg">
					The Pomodoro Technique 
				</p>
			</div>
			<div className="mt-5">
				<h1 className="text-xl sm:text-2xl font-medium">
					<span className="border-b-4 border-red-400 ">What</span> is Daily
					Focus?
				</h1>
				<p className="mt-5 tracking-wide opacity-70 text-lg break-words">
					Daily focus is small clone project from{" "}
					<a href="https://pomofocus.io/" target="_blank" className="underline">
						https://pomofocus.io/.
					</a>
					It is open source and here is the code.
					<a href="https://pomofocus.io/" target="_blank" className="underline">
						https://github.com/
					</a>
				</p>
			</div>
		</div>
	);
}

export default React.memo(About);