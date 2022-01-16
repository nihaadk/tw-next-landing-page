import PropTypes from "prop-types";
import Image from "next/image";

const RecentPropertieCard = (props) => {
  const displayOptions = props.options.map((option, index) => (
    <span className="pill-gray" key={index}>
      {option}
    </span>
  ));
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="relative w-128 h-64">
        <Image
          objectFit="cover"
          src={props.image}
          alt={props.title}
          layout="fill"
          priority
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 p-0">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block text-blue-500 font-bold text-sm px-3 py-1 mr-2 mb-2">
          {props.price}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">{displayOptions}</div>
      <div className="px-6 pt-4 pb-8">
        <button className="pill-blue">View Property</button>
      </div>
    </div>
  );
};

RecentPropertieCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  price: PropTypes.number,
  options: PropTypes.array,
};

export default RecentPropertieCard;
