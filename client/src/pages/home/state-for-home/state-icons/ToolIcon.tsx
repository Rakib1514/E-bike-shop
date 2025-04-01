import { FiTool } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { TbTool } from "react-icons/tb";

const ToolIcon = () => {
  return (
    <div className="flex items-center gap-1 text-xl">
      <FiTool />
      <MdOutlineSettings />
      <TbTool />
    </div>
  );
};

export default ToolIcon;
