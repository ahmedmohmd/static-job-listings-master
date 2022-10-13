import { useEffect, useState } from "react";
import Header from "./components/widgets/Header";
import AppContext from "./utils/AppConext";
import JobCard from "./components/widgets/JopCard";
import organicJobs from "./data/jobs.json";
import SearchBar from "./components/widgets/SearchBar";

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);

  const handleClear = () => {
    setTags([]);
    return;
  };

  const handleDelete = (tag) => {
    setTags((prevTags) => prevTags.filter((tagName) => tag !== tagName));
    return;
  };

  const handleAdd = (tag) => {
    if (tags.includes(tag)) return;
    else return setTags((prevTags) => [...prevTags, tag]);
  };

  useEffect(() => {
    const filteredJobs = jobs.filter((job) => {
      const allJobTags = [...job.languages, job.role, job.level];
      return tags.every((tag) => allJobTags.includes(tag));
    });

    if (filteredJobs.length > 0) {
      setJobs(filteredJobs);
      return;
    }

    setJobs(organicJobs);
  }, [tags]);

  return (
    <AppContext.Provider
      value={{
        onClear: handleClear,
        tags,
        onDelete: handleDelete,
        onAdd: handleAdd,
      }}
    >
      <div className="min-h-screen min-w-screen bg-[#f0fafb] ">
        <Header />
        <div className="flex justify-center items-center flex-col gap-4 ">
          <SearchBar />
          <div className="container mx-auto px-4 md:px-14 lg:px-28 flex justify-center items-center flex-col gap-6  mb-16">
            {jobs.map((job) => (
              <JobCard key={job.id} altText={job.company} jobData={job} />
            ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
