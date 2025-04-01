import React from "react";

const CommonStyleStateIcon = ({ icon }: { icon: React.ReactNode }) => {
  const iconsArray = new Array(5).fill(icon);

  return (
    <div className="flex items-center gap-1 text-xl">
      {iconsArray.map((icon, idx) => (
        <span key={idx}>{icon}</span>
      ))}
    </div>
  );
};

export default CommonStyleStateIcon;
