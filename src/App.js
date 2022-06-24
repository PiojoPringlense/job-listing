import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import FilterTag from "./components/FilterTag";
import jobs from "./data/data.json";

function App() {
	const [filterTags, setFilterTags] = useState([]);

	function removeFilterTag(tag) {
		setFilterTags((prevTags) => prevTags.filter((prevTag) => prevTag !== tag));
	}

	function addFilterTag(tag) {
		setFilterTags((prevTag) => {
			if (prevTag.includes(tag)) return prevTag;
			else return [...prevTag, tag];
		});
	}

	return (
		<div className="app-container">
			{filterTags.length > 0 && (
				<div className="filters-container">
					<div className="filters">
						{filterTags.map((tag) => (
							<FilterTag key={tag} tag={tag} removeFilterTag={removeFilterTag} />
						))}
					</div>
					<button className="clear-btn" onClick={() => setFilterTags([])}>
						Clear
					</button>
				</div>
			)}
			<div className="jobs-container">
				{jobs.map((job) => {
					if (filterTags.length < 0)
						return <Card key={job.id} job={job} addFilterTag={addFilterTag} />;
					if (
						filterTags.every((tag) =>
							[job.role, job.level, ...job.languages, ...job.tools].includes(tag)
						)
					)
						return <Card key={job.id} job={job} addFilterTag={addFilterTag} />;
				})}
			</div>
		</div>
	);
}

export default App;
