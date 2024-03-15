import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase p-2 m-2 text-center">
        Contact Us Page
      </h1>
      <form
        action="
      "
      >
        <input
          type="text"
          className=" border-black border-2 p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border-black  border-2 p-2 m-2"
          placeholder="message"
        />
        <button className="border-black  border-2 p-2 m-2 rounded bg-[blue]">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
