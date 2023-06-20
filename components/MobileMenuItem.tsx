import React from "react";
interface MobileItemProps {
  label: string;
}
const MobileMenuItem: React.FC<MobileItemProps> = ({ label }) => {
  return <div>{label}</div>;
};

export default MobileMenuItem;
