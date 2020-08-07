import React from "react";
import Department from "../components/department";
import AddBar from "../components/AddBar";

function HomePage() {
	//if LoginForm is filled out and true, proceed to homePage.js
	const array = [1, 2, 3];

	return (
		<div>
			<AddBar />
			{/* //map this department */}
			{array.map((DeptArray) => {
				return <Department number={DeptArray} />;
			})}
			{/* Array of departments. Map departments too. Look into props.*/}
		</div>
	);
}
export default HomePage;