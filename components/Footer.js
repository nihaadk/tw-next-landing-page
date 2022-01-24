import React from "react";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-4">
      <div className="container flex flex-col justify-between mx-auto space-y-8">
        <div className="mt-20">
          <a href="#" className="flex justify-center">
            <span className="h-8 w-8 text-4xl mr-4">
              <MdOutlineHomeWork />
            </span>
            <span className="font-semibold text-gray-500 text-3xl">
              Prime Properties
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-blue-500 font-medium uppercase tracking-wide">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-blue-500 font-medium uppercase tracking-wide">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms for Service</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-blue-500 font-medium uppercase tracking-wide">
              Developers
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Public API</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-blue-500 font-medium uppercase tracking-wide">
              Social Media
            </h3>
            <div className="flex">
              <a href="#" className="mx-2 hover:text-blue-500">
                <span className="text-3xl">
                  <FaTwitter />
                </span>
              </a>
              <a href="#" className="mx-2 hover:text-blue-500">
                <span className="text-3xl">
                  <FaInstagram />
                </span>
              </a>
              <a href="#" className="mx-2 hover:text-blue-500">
                <span className="text-3xl">
                  <FaFacebook />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
