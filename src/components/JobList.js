import React from 'react';
import loopStudiosImg from '../images/loop-studios.svg';
import JobListItem from './JobListItem';

export default function JobList({ jobs, handleSkillSelect }) {
    return (
        <ul className="flex flex-wrap job-list">
            {jobs.map((job, i) => (
                <JobListItem
                    key={job.id}
                    job={job}
                    img={loopStudiosImg}
                    handleSkillSelect={handleSkillSelect}
                />
            ))}
        </ul>
    );
}
