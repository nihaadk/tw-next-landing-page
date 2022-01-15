import { MdOutlineHomeWork } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7 my-1">
            <div>
              <a className="flex items-center py-4 mx-4" href="#">
                <span className="h-8 w-8 text-3xl mr-2">
                  <MdOutlineHomeWork />
                </span>
                <span className="font-semibold text-gray-500 text-lg">
                  Prime Properties
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a className="nav-item" href="#home" title="home">
                Home
              </a>
              <a className="nav-item" href="#service" title="service">
                Service
              </a>
              <a className="nav-item" href="#about" title="about">
                About
              </a>
              <a className="nav-item" href="#contact" title="contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
