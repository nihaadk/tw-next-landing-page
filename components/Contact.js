import React from "react";
import Title from "./Title";
import Button from './Button';

const Contact = () => {
  return (
    <div>
      <Title>Contact</Title>

      <div className="bg-blue-300 mt-5 flex p-10 justify-center items-center h-100">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="input-label">
                First Name
              </label>
              <input
                type="text"
                className="input mb-3"
                placeholder="First Name"
              />
              <p className="text-blue-500 text-sm italic">Please fill out this field</p>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="input-label">
                First Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full px-3">
              <label className="input-label">Email</label>
              <input
                type="text"
                className="input"
                placeholder="Email adresse"
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full px-3">
              <label className="input-label">Message</label>
              <textarea
                type="text"
                className="input"
                rows="4" cols="50"
                placeholder="Write here you message"
              />
            </div>
          </div>

          <div className="flex justify-end px-3">
            <Button title="Submit" type="primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
