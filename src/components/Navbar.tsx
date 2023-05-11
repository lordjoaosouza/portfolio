import { FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="flex p-5 text-white bg-navbar justify-between items-center">
        <div className="flex font-bold items-center ">
          <FaCode className="mr-2" />
          Joao Souza
        </div>
        <button
          className="
              text-black
              bg-nav_btn
              hover:bg-nav_btn_hov
              font-bold
              px-7
              py-3
              rounded
            "
        >
          Contact
        </button>
      </div>
    </>
  );
}
