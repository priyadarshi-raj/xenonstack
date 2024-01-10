import { Button, ButtonGroup, Divider } from "@nextui-org/react";

const About_us = () => {
  return (
    <div className="w-2/3 m-5 mx-auto flex flex-col pl-10">
      <p className="text-4xl mb-3 font-bold">About Us</p>
      <p className="text-lg mt-3 lg:mr-4 font-light text-justify">
        Here, we are driven by a profound commitment to spearheading a new era
        of Open Science collaboration. With an unwavering dedication to
        fostering innovation and discovery, we stand at the forefront of
        revolutionizing how creators and collaborators engage in the pursuit of
        scientific excellence.
        <br />
        <br />
        Local varieties: Our AI-powered platform is the cornerstone of this
        transformation. Through cutting-edge technology, we seamlessly connect
        visionaries from across the globe. What sets us apart is our ability to
        deliver tailored project recommendations, ensuring that your unique
        skills and passions align perfectly with groundbreaking endeavors.
        <br />
        <br />
        Our platform is more than just a hub for collaboration; It's a dynamic
        ecosystem where pioneers in diverse fields of science and technology
        converge. Through intuitive and efficient communication tools, we're
        demolishing barriers and uniting brilliant minds worldwide.
        <br />
        <br />
        In our enduring partnership with NASA for the Space Challenge, we've
        witnessed the remarkable potential of collaborative efforts. Together,
        we're pushing the boundaries of space exploration, and our impact is
        resonating far beyond our earthly bounds.
        <br />
        <br />
        We invite you to join us in this extraordinary journey of discovery.
        Together, we're not only shaping the future of space exploration but
        also propelling a global movement towards a more connected and
        collaborative scientific community so what are you waiting for..
      </p>
      <div className="flex mt-5">
        <ButtonGroup color="primary">
          <Button>Be a Creator</Button>
          <Divider orientation="vertical" className="bg-black" />
          <Button>Be a Collaborator</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default About_us;
