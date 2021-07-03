import React from 'react';

export default function SearchBar({
    searchText = '',
    selectedSkills = [],
    css = '',
    handleClear,
    handleSearchInputChange,
    handleSkillSelect,
    handleSkillRemove,
}) {
    return (
        <div
            className={`${css} bg-white filter-area flex flex-col p-4 sm:px-10 sm:py-6 rounded-lg shadow-lg`}
        >
            <div className="">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search job..."
                    className="block border p-4 rounded-lg shadow-lg w-full focus:outline-none focus:ring focus:border-gray-100"
                    value={searchText}
                    onChange={handleSearchInputChange}
                />
            </div>
            <div
                className={`flex items-center justify-between sm:items-start mt-10 ${
                    !selectedSkills.length && 'hidden'
                }`}
            >
                <ul className="filter-tags flex flex-wrap flex-1">
                    {selectedSkills.map((item, i) => (
                        <li
                            className="mr-3 xmb-2 bg-green-50 flex items-center pl-2 rounded-l"
                            key={Math.random()}
                        >
                            <span className="font-semi-bold text-green-500">{item}</span>
                            <button
                                type="button"
                                onClick={() => handleSkillRemove(item)}
                                className="bg-green-600 close leading-none pb-2 ml-2 px-3 text-2xl text-white rounded-r rounded-l-none hover:bg-black transition-all"
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="clear-tags ml-3 hover:underline font-semibold"
                    onClick={handleClear}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}
