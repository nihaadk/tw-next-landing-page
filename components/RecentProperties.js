import RecentPropertieCard from "./RecentPropertieCard";
import prop1 from "../public/img/prop1.webp";
import prop2 from "../public/img/prop2.webp";
import prop3 from "../public/img/prop3.webp";

const recentProperties = [
  {
    title: "Next Epitome",
    description:
      "Dolore id culpa quis ad duis sint mollit in sunt adipisicing mollitid. Officia laboris non irure non amet sunt enim dolore nulla nulla laborum sunt anim deserunt.",
    price: "$500.00",
    image: prop1,
    options: ["7 Baths", "7 Beds"],
  },
  {
    title: "Florida Villa",
    description:
      "Dolore id culpa quis ad duis sint mollit in sunt adipisicing mollitid. Officia laboris non irure non amet sunt enim dolore nulla nulla laborum sunt anim deserunt.",
    price: "$340.00",
    image: prop2,
    options: ["2 Baths", "4 Beds"],
  },
  {
    title: "Gracia Pia",
    description:
      "Dolore id culpa quis ad duis sint mollit in sunt adipisicing mollitid. Officia laboris non irure non amet sunt enim dolore nulla nulla laborum sunt anim deserunt.",
    price: "$355.00",
    image: prop3,
    options: ["1 Baths", "4 Beds"],
  },
];

const RecentProperties = () => {
  const recentPropertyCards = recentProperties.map((property, index) => (
    <RecentPropertieCard
      title={property.title}
      description={property.description}
      image={property.image}
      options={property.options}
      key={index}
    />
  ));

  return (
    <div className="mt-5">
      <div className="text-center">
        <h2 className="font-bold text-gray-500 text-3xl">Recent Properties</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-10 gap-5">
        {recentPropertyCards}
      </div>
    </div>
  );
};

export default RecentProperties;
