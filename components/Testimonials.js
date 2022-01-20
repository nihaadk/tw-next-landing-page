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
  const clientsCards = clients.map((c) => (
    <TestimonialsCard
      name={c.name}
      title={c.title}
      description={c.description}
    />
  ));

  return (
    <div className="my-40">
      <Title>What clients say about us ?</Title>
      <div className="grid-col-3">
        {clientsCards}
      </div>
    </div>
  );
};

export default Testimonials;
