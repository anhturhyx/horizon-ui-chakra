import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Taskinfo from "views/admin/taskassign";
import DataTables from "views/admin/dataTables";
import seemap from "views/admin/map";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Maps",
    layout: "/admin",
    path: "/maps",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: seemap,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "",
     layout: "/admin",
     path: "/task",
     icon: (
       <Icon
         as={MdLock}
         width='20px'
         height='20px'
         color='white'
       />
     ),
     component: Taskinfo,
     secondary: true,
   }
];

export default routes;
