import RecentPropertieCard from "./RecentPropertieCard";
import ny from "../public/img/ny.webp";
import sf from "../public/img/sf.webp";
import bs from "../public/img/bs.webp";
import Title from "./Title";

const locations = [
  {
    title: "New York",
    description:
      "Fugiat sunt qui ea non ullamco eiusmod elit incididunt tempor qui est. Irure ullamco eu laboris id nulla in aliquip ut elit nulla cillum reprehenderit elit veniam. Irure cillum incididunt Lorem velit incididunt Lorem labore velit minim et quis qui culpa reprehenderit. Commodo reprehenderit reprehenderit ex deserunt voluptate ipsum consectetur proident non irure. Eu non magna nostrud sint ea mollit. Nulla qui quis veniam duis elit ut pariatur sunt cillum",
    image: ny,
  },
  {
    title: "San Franciso",
    description:
      "Fugiat sunt qui ea non ullamco eiusmod elit incididunt tempor qui est. Irure ullamco eu laboris id nulla in aliquip ut elit nulla cillum reprehenderit elit veniam. Irure cillum incididunt Lorem velit incididunt Lorem labore velit minim et quis qui culpa reprehenderit. Commodo reprehenderit reprehenderit ex deserunt voluptate ipsum consectetur proident non irure. Eu non magna nostrud sint ea mollit. Nulla qui quis veniam duis elit ut pariatur sunt cillum",
    image: sf,
  },
  {
    title: "Boston",
    description:
      "Fugiat sunt qui ea non ullamco eiusmod elit incididunt tempor qui est. Irure ullamco eu laboris id nulla in aliquip ut elit nulla cillum reprehenderit elit veniam. Irure cillum incididunt Lorem velit incididunt Lorem labore velit minim et quis qui culpa reprehenderit. Commodo reprehenderit reprehenderit ex deserunt voluptate ipsum consectetur proident non irure. Eu non magna nostrud sint ea mollit. Nulla qui quis veniam duis elit ut pariatur sunt cillum",
    image: bs,
  },
];

const Locations = () => {
  const mappedLocations = locations.map((location, index) => (
    <div className="sm:mx-0 md:mx-0 lg:mx-20 xl:mx-20" key={index}>
      <RecentPropertieCard
        title={location.title}
        description={location.description}
        image={location.image}
        options={location.options}
        showDetails={false}
      />
    </div>
  ));

  return (
    <div className="my-40">
      <Title>Locations</Title>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-10 gap-5">
        {mappedLocations}
      </div>
    </div>
  );
};

export default Locations;
