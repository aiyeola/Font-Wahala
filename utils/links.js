import { MdComputer, MdLocationOn, MdOutlinePedalBike } from "react-icons/md";
import { FaUser, FaBriefcaseMedical } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";

export const nav = [
  {
    name: "Dashboard",
    link: "/",
    icon: <MdComputer size="20px" />,
  },
  {
    name: "Staffs",
    link: "/staff",
    icon: <FaUser size="20px" />,
  },
  {
    name: "Riders",
    link: "/riders",
    icon: <MdOutlinePedalBike size="20px" />,
  },
  {
    name: "Dispatch",
    link: "/dispatch",
    icon: <IoPeopleCircleOutline size="20px" />,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: <IoPeopleCircleOutline size="20px" />,
  },
  {
    name: "Payments",
    link: "/payments",
    icon: <IoPeopleCircleOutline size="20px" />,
  },
];

export const bottomNav = [
  {
    name: "Medical firms",
    link: "medical_firms",
    icon: <FaBriefcaseMedical size="20px" />,
  },

  {
    name: "Location",
    link: "location",
    icon: <MdLocationOn size="20px" />,
  },
];
