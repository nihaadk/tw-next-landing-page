import Button from "./Button";

const Banner = () => {
  return (
    <section className="text-gray-600 body-font px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-16">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="shadow-lg rounded-md border-2">
            <img
              className="object-cover object-center"
              src="/img/banner.webp"
              alt="hero"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl md:text-6xl mb-4 font-extrabold">
            <span className="block text-blue-600 mb-2">Premium Properties</span>
            <span className="block text-gray-900">Non-premium Prices</span>
          </h1>
          <p className="mb-5 text-gray-500 md:text-xl md:mt-5">
            Reprehenderit id officia sit non elit esse quis tempor in. Culpa
            aute minim esse labore non aliqua enim incididunt amet eu. Esse
            dolor nostrud duis nisi eu quis sit sint ex duis laborum id Lorem
            aute. Cupidatat dolore mollit ea eu ullamco do nostrud reprehenderit
            laborum non nostrud quis proident.
          </p>
          <div className="mt-2 sm:mt-5 flex flex-col sm:flex-row">
            <div className="md:m-2">
              <Button title="View Propertie" type="primary" link="#first" />
            </div>

            <div className="md:m-2">
              <Button title="View Propertie" type="second" link="#first" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;