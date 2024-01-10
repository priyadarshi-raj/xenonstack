import { useEffect } from "react";
import { Input, initTE } from "tw-elements";
import ProfileImageSection from "./ProfileImageSection";
const Profile = () => {
  useEffect(() => {
    initTE({ Input });
  }, []);
  return (
    <div className="p-5 md:p-10 lg:p-20  lg:px-32">
      <h1 className="text-center text-lg font-medium pb-10">Edit Profile</h1>
      <div className="flex flex-col items-start md:flex-row justify-between gap-5">
        <ProfileImageSection />
        <div className="w-full">
          <div>
            <div className="grid grid-cols-4 gap-8 items-center">
              <>
                <label className="col-span-1 text-end">Name</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>

              <>
                <label className="col-span-1 text-end">Email</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>

              <>
                <label className="col-span-1 text-end">Gender</label>
                <select
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                >
                  <option selected disabled>
                    Select Gender
                  </option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </>

              <>
                <label className="col-span-1 text-end">Mobile</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>

              <>
                <label className="col-span-1 text-end">Organisation</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <>
                <label className="col-span-1 text-end">Designation</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <>
                <label className="col-span-1 text-end">Domain</label>
                <select
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                >
                  <option selected disabled>
                    Select Domain
                  </option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </>
              <>
                <label className="col-span-1 text-end">Skills</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <>
                <label className="col-span-1 text-end">Expertise</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <label className="text-start md:text-end text-xl font-semibold pt-10 col-span-2 md:col-span-1 -mb-8 md:-mb-4">
                Address :
              </label>
              <div className="col-span-3" />
              <hr className="col-span-4" />
              <>
                <label className="col-span-1 text-end">City</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <>
                <label className="col-span-1 text-end">State</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <>
                <label className="col-span-1 text-end">Country</label>
                <input
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
              <>
                <label className="col-span-1 text-end">Address</label>
                <textarea
                  className="col-span-3 border rounded border-black p-2 px-2"
                  type="text"
                />
              </>
            </div>
            <div className="w-full py-5 flex  justify-center items-center">
              <button className="text-center hover:-translate-y-1 active:translate-y-0 transition bg-[#003366] text-white px-2 md:px-5 py-2 rounded flex justify-center place-items-center gap-3 hover:opacity-70">
                <p>Save Changes</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
