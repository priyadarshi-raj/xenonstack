const ProfileImageSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-56 bg-white w-56 border-2 rounded-lg border-black grid place-items-center shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      <div className="mb-3 w-max">
        <label
          htmlFor="formFile"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        ></label>
        <input
          className="bg-white relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="formFile"
        />
      </div>
      <button className="hover:-translate-y-1 active:translate-y-0 transition bg-[#003366] text-white px-2 md:px-5 rounded flex justify-center place-items-center gap-3 hover:opacity-70 py-2">
        <p>Save Image</p>
      </button>
    </div>
  );
};

export default ProfileImageSection;
