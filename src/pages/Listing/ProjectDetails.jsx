import { useState } from "react";
import axios from "axios";

const ProjectDetails = () => {
  const options = [
    { value: "1", label: "Select Domain", disabled: true },
    { value: "2", label: "Medicine & Healthcare" },
    { value: "3", label: "Physical & Particle Research" },
    { value: "4", label: "Astronomy & Space Exploration" },
    { value: "5", label: "Chemistry & Materials Science" },
    { value: "6", label: "Environmental Science" },
    { value: "7", label: "Data Science & AI" },
    { value: "8", label: "Social Sciences" },
    { value: "9", label: "Archaeology & Anthropology" },
    { value: "10", label: "Engineering & Technology" },
  ];
  const skillOptions = [
    { value: "1", label: "Select Skills", disabled: true },
    { value: "2", label: "Web Development and Hosting" },
    { value: "3", label: "Data Management and Analysis" },
    { value: "4", label: "Programming and Software Development" },
    { value: "5", label: "Data Sharing and Collaboration" },
    { value: "6", label: "Open Access and Publishing" },
    { value: "7", label: "Data Security and Privacy" },
    { value: "8", label: "Project Management" },
    { value: "9", label: "Ethics and Responsible Research" },
    { value: "10", label: "Interdisciplinary Collaboration" },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjective] = useState("");
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState("");
  const [expertise, setExpertise] = useState([]);
  const [photo, setPhoto] = useState("");

  const saveInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("objectives", objectives);
    formData.append("domain", domain);
    formData.append("skills", skills);
    formData.append("expertise", JSON.stringify(expertise));
    if (photo) {
      formData.append("photo", photo);
    }

    axios
      .post("https://nasabackend.onrender.com/api/v1/project/addlisting", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div className="bg-white border rounded-md border-black p-5 flex flex-col items-center">
        <h1 className="w-full text-xl font-medium">Listing Details</h1>
        <div className="w-full grid grid-cols-4 items-center py-10 gap-y-6">
          <label className="col-span-1 text-center">Title : *</label>
          <input
            className="col-span-3 border border-black rounded-lg h-10 px-3 py-5"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="col-span-1 text-center">Expertise : *</label>
          <input
            className="col-span-3 border border-black rounded-lg h-10 px-3 py-5"
            type="text"
            name="expertise"
            value={expertise.join(", ")}
            onChange={(e) => setExpertise(e.target.value.split(", "))}
          />
          <label className="col-span-1 text-center">Description : *</label>
          <textarea
            className="col-span-3 border border-black rounded-lg px-3 py-5"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="col-span-1 text-center">Objectives : *</label>
          <textarea
            className="col-span-3 border border-black rounded-lg px-3 py-5"
            type="text"
            name="objectives"
            value={objectives}
            onChange={(e) => setObjective(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white border rounded-md border-black p-5 ">
        <div>
          <h1 className="w-full text-xl font-medium">Photos</h1>
          <p className="text-xs py-2">add upto 10 photos of your project</p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5 items-center">
          <div className="mb-3 flex flex-col gap-3 items-center h-max">
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              id="formFile"
              name="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <select
              className="py-1.5 w-full md:w-1/3 border border-black rounded-md px-2"
              name="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.label}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <select
              className="py-1.5 w-full md:w-1/3 border border-black rounded-md px-2"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            >
              {skillOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.label}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>

            <button
              className="hover:-translate-y-1 active:translate-y-0 transition bg-[#003366] text-white px-2 md:px-10 rounded flex justify-center place-items-center gap-3 hover:opacity-70 py-2 w-fit "
              onClick={saveInfo}
            >
              <p>Save</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
