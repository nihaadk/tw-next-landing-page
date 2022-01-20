import TestimonialsCard from "./TestimonialsCard";
import Title from "./Title";

const clients = [
  {
    description:
      "Et commodo duis anim irure aliquip incididunt cillum tempor sit minim. Et commodo duis anim irure aliquip incididunt cillum tempor sit minim.",
    name: "Will Smith",
    title: "Director",
  },
  {
    description:
      "Et commodo duis anim irure aliquip incididunt cillum tempor sit minim.",
    name: "Mark Foster",
    title: "Software Developer",
  },
  {
    description:
      "Et commodo duis anim irure aliquip incididunt cillum tempor sit minim.",
    name: "Oliver Geis",
    title: "UX Designer",
  },
];

const Testimonials = () => {
  const clientCards = clients.map((client, index) => (
    <TestimonialsCard
      key={index}
      name={client.name}
      title={client.title}
      description={client.description}
    />
  ));

  return (
    <div className="my-40">
      <Title>What clients say about us ?</Title>
      <div className="grid-col-3">{clientCards}</div>
    </div>
  );
};

export default Testimonials;
