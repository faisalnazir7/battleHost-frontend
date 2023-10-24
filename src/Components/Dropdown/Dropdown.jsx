// import { Fragment } from 'react'
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import userProfilePic from "../../assets/sampleuser.png";
// import toast from 'react-hot-toast'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  // const navigator=useNavigate();

  return (
    <Menu as="div" className="relative inline-block text-left ml-auto">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold mt-4">
          <div className="-ml-10 -mt-2 lg:block">
            <span className="relative inline-block">
              <img
                className="h-10 w-10 rounded-full"
                src={
                  JSON.parse(localStorage.getItem("user_data"))?.photo
                    ? JSON.parse(localStorage.getItem("user_data"))?.photo
                    : userProfilePic
                }
                alt="Profile pic"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
            </span>
          </div>
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
      </div>
    </Menu>
  );
}
