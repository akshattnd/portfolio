import React from "react";

const Layout = ({ children }) => {
  return <div className="container mx-auto bg-[#E5E7EB] dark:bg-gray-900 text-black dark:text-white">{children}</div>;
};

export default Layout;
