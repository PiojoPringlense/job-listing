import React from "react";

export default function FilterTag({ tag, removeFilterTag }) {
	return (
		<div className="filter-tag">
			<span className="filter-tag-name">{tag}</span>
			<button className="close-tag-btn" onClick={() => removeFilterTag(tag)}>
				<img alt="Remove tag" src="./images/icon-remove.svg" />
			</button>
		</div>
	);
}
