import React from "react";
import { useState } from "react";
import { Link  } from "react-router-dom";
const Opening = () => {

  const [open, setOpen] = useState(false);

  const Menus = [
    {
        id: 1,
        name: "Edit profile",
        link: "/userprofile"
    },
    {
        id: 2,
        name: "Logout",
        link: "/"
    }
  ]


  return (
    <div className="">
     <div>
        <p>hi</p>
     </div>
    </div>
  );
};

export default Opening;
