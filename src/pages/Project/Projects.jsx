import ChatButton from "./ChatButton";
import { User, Textarea } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Projects = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [auth,setAuth] = useAuth();
  const [comment,setComment] = useState("")

  const [project, setProject] = useState({
    domain: "",
    skills: "",
    expertise: "",
    description: "",
    objectives: "",
  });
  useEffect(() => {
    if (!auth?.token) {
      navigate("/register");
    }
  }, []);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`https://nasabackend.onrender.com/api/v1/project/${projectId}`);
        setProject(response.data); 

      } catch (error) {
        console.error(error);
      }
    };
    fetchProjectDetails();
  }, []);

  const commentEntry = () => {
    axios.post(`http://localhost:8989/api/v1/project/entries/${auth.user._id}`,{
      comment
    })
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const CardBox = (img, text) => {
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt=""
        className="object-cover"
        height={200}
        src={img}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{text}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>;
  };
  return (
    <>
      <div className="overflow-auto">
        <div className=" flex flex-col pl-5 pr-5">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap items-center justify-around md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex w-1/3 flex-wrap absolute-right-0">
                <div className="flex flex-col gap-4">
                  <div className="flex w-2/3">
                    <span>DOMAIN : {project.domain}</span>
                  </div>
                  <div className="flex w-2/3">
                    <span>SKILLS : {project.skills}</span>
                  </div>
                  <div className="flex w-2/3">
                    <span>EXPERTISE : {project.expertise}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-20 mt-2">
            <p className="text-4xl mb-3 font-bold">Project Description</p>
            <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
              {project.description}
            </p>
            <p className="text-4xl mb-3 font-bold mt-3 ">Project Objectives</p>
            <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
              {project.objectives.split("-")}
            </p>
          </div>
          <div className="flex flex-col p-20 mt-2">
            <div className="w-15">
              <Button variant="shadow" color="primary">
                Looking For Collaborator
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex flex-col p-20 mt-2">
            <h2 className="text-xl font-bold left-9 mr-5">
              &quot;What makes you suitable for project?&quot;
            </h2>
            <form className="pr-10">
              <div className="mt-5 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white rounded-t-lg">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    name = "comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="focus:outline-none w-full px-0 text-sm  bg-white border-0 focus:ring-0  dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t">
                  <Button color="primary" onClick={commentEntry}>Apply</Button>
                  <ChatButton/>
                  <Button color="primary">Apply</Button>
                  <ChatButton />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col p-20 mt-2">
            <h2 className="text-xl font-bold left-9 mr-5 mt-6">Created By</h2>
            <div className="mt-10 divide-x">
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                className="mt-4"
              />
              {/* <div className="flex min-w-0 gap-x-4 ">
                  <svg
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    Projects
                  </p>
                </div>
                <div className="flex min-w-0 gap-x-4 ">
                  <svg
                    className="h-8 w-8 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    Collaborations
                  </p>
                </div> */}
              <div className="flex items-center space-x-1 mt-4">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  Give Rating:
                </p>
              </div>
              <form className="bg-white rounded-lg border p-2 mt-4 w-auto">
                <Textarea
                  variant="faded"
                  label="Feedback"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0 max-w-[400px]"
                />
                <div className="flex justify-start">
                  <Button color="primary">Submit</Button>
                </div>
              </form>
            </div>
          </div>
          {
            //suggested Projects;
          }
          <div className="flex border justify-around mt-4">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
