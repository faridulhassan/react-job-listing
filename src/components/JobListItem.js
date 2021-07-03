import React from 'react';

export default function JobListItem({ job, img, handleSkillSelect }) {
    const {
        company,
        logo,
        new: isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = job;
    return (
        <li
            className={`sm:flex justify-between p-4 sm:p-8 rounded-lg shadow-lg bg-white w-full mb-4 sm:mb-8 relative ${
                featured && 'border-l-4 border-green-500'
            }`}
        >
            {/* <div className="counter bg-green-500 absolute left-0 top-0 w-6 font-semibold text-white text-center rounded-tl">
                1
            </div> */}
            <div className="flex flex-wrap">
                <div className="w-14 h-14 sm:w-20 sm:h-20 mr-5 x-my-9 sm:my-0 self-center">
                    <img className="h-auto rounded-full w-full" src={img} alt="" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center mb-1">
                        <span className="job-desc-employer-name mr-4 font-bold text-green-600">
                            {company}
                        </span>
                        {isNew && (
                            <span className="bg-green-500 font-bold inline-block  mr-1 px-2 py-1 rounded-full text-white text-xs uppercase">
                                New!
                            </span>
                        )}
                        {featured && (
                            <span className="bg-black font-bold inline-block mr-1 px-2 py-1 rounded-full text-white text-xs uppercase">
                                Featured
                            </span>
                        )}
                    </div>
                    <h2 className="job-desc-title font-bold text-xl hover:text-green-600 cursor-pointer transition-colors">
                        {position}
                    </h2>
                    <div className="job-desc-info text-gray-400 flex flex-wrap align-middle">
                        <span className="mr-2">{postedAt} </span>
                        <span className="mr-2 text-2xl leading-3">.</span>
                        <span className="mr-2">{contract} </span>
                        <span className="mr-2 text-2xl leading-3">.</span>
                        <span className="mr-2">{location}</span>
                    </div>
                </div>
            </div>
            <hr className="my-3" />
            <div className="sm:self-center">
                <ul>
                    <li className="mr-2 job-skills">
                        {languages.map((language) => (
                            <button
                                key={Math.random()}
                                type="button"
                                className="px-2 py-1 mr-2 bg-green-100 font-semibold text-green-500 hover:bg-green-500 hover:text-white transition-all"
                                onClick={handleSkillSelect}
                            >
                                {language}
                            </button>
                        ))}
                    </li>
                </ul>
            </div>
        </li>
    );
}
