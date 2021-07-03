import { Component } from 'react';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import data from './database/data.json';
import headerBg from './images/bg-header-desktop.svg';

class App extends Component {
    state = {
        jobs: data.slice(),
        filteredJobs: data.slice(),
        searchText: '',
        selectedSkills: [],
    };

    componentDidMount() {
        // console.log('componentDidMount called');
        // console.log(this.state);
    }

    handleSearchInputChange = (e) => {
        const { value } = e.target;
        this.setState({
            searchText: value,
            filteredJobs: this.filterJobs(value, true),
        });
        // this.setState({ filteredJobs: this.filterJobs(e.target.value, true) });
    };

    filterJobs = (searchText = '', isText, shouldRemove = false) => {
        const { jobs } = this.state;
        const text = searchText.toLowerCase();
        // const fieldToSearch = isText ? 'position' : 'languages';
        const filteredJobs = jobs.filter((job) => {
            const jobTitle = isText
                ? job.position.toLowerCase()
                : job.languages.map((language) => language.toLowerCase());
            return !shouldRemove ? jobTitle.includes(text) : !jobTitle.includes(text);
        });
        console.log(filteredJobs);
        return filteredJobs;
    };

    handleClear = () => {
        const { jobs } = this.state;
        this.setState({
            searchText: '',
            selectedSkills: [],
            filteredJobs: jobs.slice(),
        });
    };

    handleSkillSelect = (e) => {
        const skillToAdd = e.target.innerText;
        const { selectedSkills } = this.state;

        if (selectedSkills.includes(skillToAdd)) {
            return;
        }
        console.log('set');
        this.setState({
            filteredJobs: this.filterJobs(skillToAdd),
            selectedSkills: [...selectedSkills, skillToAdd],
        });
    };

    handleSkillRemove = (skillToRemove) => {
        console.log(skillToRemove);
        const { selectedSkills, filteredJobs } = this.state;
        const filterdSkills = selectedSkills.filter((skill) => skill !== skillToRemove);
        this.setState({
            selectedSkills: filterdSkills,
            filteredJobs: this.filterJobs(skillToRemove, 'skill', true),
        });
    };

    render() {
        const { jobs, filteredJobs, selectedSkills, searchText } = this.state;
        // console.log('render called');
        // console.log(this.state);
        // const filtered = this.filterJobs(searchText);
        return (
            <div id="">
                <header className="top-header" style={{ backgroundImage: `url(${headerBg})` }} />
                <div className="job-list-wrapper container mx-auto px-3">
                    <SearchBar
                        css="-my-20 mb-10"
                        searchText={searchText}
                        selectedSkills={selectedSkills}
                        handleSearchInputChange={this.handleSearchInputChange}
                        handleClear={this.handleClear}
                        handleSkillRemove={this.handleSkillRemove}
                    />
                    <div className="job-list-area">
                        {filteredJobs.length ? (
                            <JobList
                                jobs={filteredJobs}
                                handleSkillSelect={this.handleSkillSelect}
                            />
                        ) : (
                            <h2 className="font-bold text-2xl text-center">No jobs found</h2>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
