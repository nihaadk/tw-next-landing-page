const ImageBanner = () => {
  return (
    <div
      className="py-40 bg-cover h-auto"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(img/banner-bg.webp)",
      }}
    >
      <div className="container mx-auto px-6 mt-40">
        <h2 className="text-4xl font-bold text-white">
          Expirence Luxury Like Never Before
        </h2>
        <h3 className="text-2xl mb-8 mt-2 font-semibold text-gray-200">
          100 Exotic locations across the globe.
        </h3>
        <button className="text-white border-white border-2 px-8 py-4 uppercase">
          Explore locations
        </button>
      </div>
    </div>
  );
};

export default ImageBanner;
