import React from "react";
import { Link } from "react-router";
import ToolIcon from "./state-icons/ToolIcon";
import CommonStyleStateIcon from "./state-icons/CommonStyleStateIcon";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbMotorbike } from "react-icons/tb";

type stateDataType = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  stateLink: string;
};

const StateHome = () => {
  const stateData: stateDataType[] = [
    {
      icon: <ToolIcon />,
      title: "Over 15 Years Experience",
      subtitle: "We have the know how to do what we do",
      stateLink: "/",
    },
    {
      icon: <CommonStyleStateIcon icon={<CiStar />} />,
      title: "Over 20,000 Happy Riders",
      subtitle: "Rated excellent on TrustPilot & Judge.me",
      stateLink: "/",
    },
    {
      icon: <CommonStyleStateIcon icon={<RiMoneyDollarCircleLine />} />,
      title: "0% Finance On Electric Bikes",
      subtitle: "Apply for finance with V12 at checkout",
      stateLink: "/",
    },
    {
      icon: <CommonStyleStateIcon icon={<TbMotorbike />} />,
      title: "Over 700 E-Bikes In Stock",
      subtitle: "Wide range ready for immediate delivery",
      stateLink: "/",
    },
  ];

  return (
    <div className="font-body container mx-auto mt-12">
      <h2 className="font-heading text-5xl font-bold">
        Electric Bikes. It's What We Do.
      </h2>
      <div className="mt-12 grid grid-cols-4">
        {stateData.map((data: stateDataType, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center px-4 text-center"
          >
            <div className="flex items-center gap-1 text-xl">{data.icon}</div>
            <p className="mt-1.5 font-bold">{data.title}</p>
            <span>{data.subtitle}</span>
            <Link to={data.stateLink} className="mt-4 font-semibold underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateHome;
