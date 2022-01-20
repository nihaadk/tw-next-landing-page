const ColorBanner = () => {
  return (
    <div
      className="py-24 bg-cover h-auto bg-gradient-to-br from-blue-900 to-blue-500"
    >
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold text-white">
          Save upto 50% on broker commisions
        </h2>
        <h4 className="text-white mb-5 mt-2 font-semibold text-2xl">
            Lower brokerage fees
        </h4>
        <button className="text-black bg-white rounded-lg px-8 py-4 font-bold uppercase hover:bg-blue-500 hover:text-white">
          Explore locations
        </button>
      </div>
    </div>
  );
};

export default ColorBanner;
