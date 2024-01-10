
import { useEffect, useState } from 'react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import ProjectCard from './ProjectCard';
import FeedSection from './FeedSection';
import axios from 'axios';
import { useAuth } from '../../context/auth';
const ProjectSection = () => {
  const [projects, setProjects] = useState([{
    title:"",
    domain:""
  }]);
  const [auth,setAuth]=useAuth()
  const fetchData=async()=>{
    const {data}= await axios.get(`https://nasabackend.onrender.com/api/v1/project/getproject/${auth.user._id}`)
    console.log(data);
    setProjects(data)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="px-10">
      <div className="">
        <div className="flex w-full gap-5 justify-between flex-col">
          <Tabs color="primary" aria-label="Options" className="h-15">
            <Tab key="bestmatch" title="Current Projects">
              <Card>
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {projects.map((val, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          name={val.title}
                          category={val.domain}
                        />
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="recentproject" title="History">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="feed" title="Feed">
              <Card>
                <CardBody>
                  <FeedSection />
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
