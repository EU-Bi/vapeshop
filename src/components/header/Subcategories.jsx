import React from "react";

export const Subcategories = () => {
    const sub = ["ElfBar", "Airis", "VAAL", "Straw", "Oxbar"]
  return (
    <div className="subcategories">
        {sub.map((cat, index)=><div key={index} className="subcategoriesItem">{cat}</div>)}
    </div>
  );
};
