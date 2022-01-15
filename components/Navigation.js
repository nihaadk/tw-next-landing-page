import { MdOutlineHomeWork } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a className="flex items-center py-4" href="#">
              <span className="text-4xl px-2">
                <MdOutlineHomeWork />
              </span>
              <span className="font-semibold text-gray-500 text-lg">Prime Properties</span>
            </a>
          </div>
          <div>
              <a href="#home" title="home" >Home</a> 
              <a href="#service" title="service" >Service</a> 
              <a href="#about" title="about" >About</a> 
              <a href="#contact" title="contact" >Contact</a> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
