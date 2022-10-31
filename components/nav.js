import React from "react";
import { FiCodesandbox, FiSettings } from "react-icons/fi";

function nav({ setOpenSetting }) {
	return (
		<nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
			<div className="flex items-center gap-1 cursor-pointer">
				<FiCodesandbox className="text-sm " />
				<h1>Daily Focus</h1>
			</div>
			<FiSettings
				className="text-2xl cursor-pointer "
				onClick={() => setOpenSetting((value) => !value)}
			/>
		</nav>
	);
}
export default React.memo(nav);