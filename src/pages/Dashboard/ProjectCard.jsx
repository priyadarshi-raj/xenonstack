import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const ProjectCard = ({ src, name, category }) => {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={src}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
        <p className="text-tiny">{category}</p>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
