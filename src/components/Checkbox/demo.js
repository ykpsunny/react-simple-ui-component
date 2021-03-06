import React, { useState } from "react";

import Checkbox from ".";

import CheckboxGroup from "./CheckboxGroup";

function CheckboxDemo() {
	let [value, setValue] = useState(['小明', 19])
	return (
		<div>
			<Checkbox id="name">name</Checkbox>
			<br />
			<Checkbox id="age" disibled={true}>
				age
			</Checkbox>
			<br />
			<CheckboxGroup
				name="a"
				onChenge={checkedValue => {
					console.log(checkedValue);
					setValue(checkedValue)
				}}
				value={value}
			>
				<Checkbox value="小明">name</Checkbox>
				<Checkbox value={19}>age</Checkbox>
				<Checkbox value="mail">gender</Checkbox>
			</CheckboxGroup>
			<CheckboxGroup
				name="b"
				disibled={true}
			>
				<Checkbox value="小明" value={['小明']}>name</Checkbox>
			</CheckboxGroup>
		</div>
	);
}

export default CheckboxDemo;
