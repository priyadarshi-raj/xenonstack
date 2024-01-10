import ProjectCard from "./ProjectCard";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import FeedSection from "./FeedSection";

const CollaboratorSection = () => {
  const data1 = [
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasda sndm;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdas ndm;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },

    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
  ];
  return (
    <div className="px-10">
      <div className="">
        <div className="flex w-full gap-5 justify-between flex-col">
          <Tabs color="primary" aria-label="Options" className="h-15 m-2">
            <Tab key="bestmatch" title="Best Match">
              <Card>
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {data1.map((val, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          name={val.category}
                          category={val.title}
                          src={val.src}
                        />
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="recentproject" title="Recent Projects">
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

export default CollaboratorSection;
