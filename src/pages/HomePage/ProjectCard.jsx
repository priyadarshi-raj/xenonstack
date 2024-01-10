const ProjectCard = ({ src, name, category }) => {
  return (
    <div className="block h-full max-w-[18rem] rounded-lg bg-white shadow-none border-[1px]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-5">
        <img className="rounded-lg h-40 w-full" src={src} alt="" />
      </div>
      <div className="pl-5 py-2">
        <p className="text-lg text-black">{name}</p>
        <p className="text-base text-black">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
