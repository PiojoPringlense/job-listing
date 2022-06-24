import React from "react";

export default function Card({ job, addFilterTag }) {
	return (
		<div className={job.featured ? "job-container featured" : "job-container"}>
			<div className="job-logo">
				<img alt="job logo" src={job.logo} />
			</div>
			<div className="job-details">
				<div className="job-company">
					<span className="job-company-name">{job.company}</span>
					{job.new ? <span className="badge new">NEW!</span> : null}
					{job.featured ? <span className="badge featured">FEATURED</span> : null}
				</div>
				<div className="job-position">{job.position}</div>
				<div className="job-info">
					<span className="job-postedAt">{job.postedAt}</span>
					<span>&bull;</span>
					<span className="job-contract">{job.contract}</span>
					<span>&bull;</span>
					<span className="job-location">{job.location}</span>
				</div>
			</div>
			<div className="job-tags">
				<button className="tag" onClick={() => addFilterTag(job.role)}>
					{job.role}
				</button>
				<button className="tag" onClick={() => addFilterTag(job.level)}>
					{job.level}
				</button>
				{job.languages.map((lang) => {
					return (
						<button key={lang} className="tag" onClick={() => addFilterTag(lang)}>
							{lang}
						</button>
					);
				})}
				{job.tools.map((tool) => {
					return (
						<button key={tool} className="tag" onClick={() => addFilterTag(tool)}>
							{tool}
						</button>
					);
				})}
			</div>
		</div>
	);
}
