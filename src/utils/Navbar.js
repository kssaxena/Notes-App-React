import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import {
  ArchiveRestore,
  BellRing,
  Menu,
  NotebookPen,
  Pencil,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className={`h-full`}
    >
      <List className={`flex flex-col mt-10 bg-[#0D1C2A] h-full text-black `}>
        <div className={`w-full p-5 justify-center items-center mb-10`}>
          <h1 className={`text-5xl font-bold w-full text-right text-[#66B2FF]`}>
            NOTES
          </h1>
        </div>

        <Link
          to={"/"}
          className={`hover:bg-[#66B2FF] duration-200 ease-in-out flex justify-items-start w-full p-3 rounded-r-full mt-1 mb-1 group`}
        >
          <NotebookPen className={`text-white  group-hover:text-black`} />
          <h1
            className={`text-white text-lg ml-6 group-hover:text-black font-medium font-mono`}
          >
            All Notes
          </h1>
        </Link>
        <Link
          to={"/reminders"}
          className={`hover:bg-[#66B2FF] duration-200 ease-in-out flex justify-items-start w-full p-3 rounded-r-full mt-1 mb-1 group`}
        >
          <BellRing className={`text-white  group-hover:text-black`} />
          <h1
            className={`text-white text-lg ml-6 group-hover:text-black font-medium font-mono `}
          >
            Reminders
          </h1>
        </Link>
        <Link
          className={`hover:bg-[#66B2FF] duration-200 ease-in-out flex justify-items-start w-full p-3 rounded-r-full mt-1 mb-1 group`}
        >
          <Pencil className={`text-white  group-hover:text-black`} />
          <h1
            className={`text-white text-lg ml-6 group-hover:text-black font-medium font-mono `}
          >
            Edit Labels
          </h1>
        </Link>
        <Link
          className={`hover:bg-[#66B2FF] duration-200 ease-in-out flex justify-items-start w-full p-3 rounded-r-full mt-1 mb-1 group`}
        >
          <ArchiveRestore className={`text-white  group-hover:text-black`} />
          <h1
            className={`text-white text-lg ml-6 group-hover:text-black font-medium font-mono `}
          >
            Archive
          </h1>
        </Link>
        <Link
          className={`hover:bg-[#66B2FF] duration-200 ease-in-out flex justify-items-start w-full p-3 rounded-r-full mt-1 mb-1 group`}
        >
          <Trash2 className={`text-white  group-hover:text-black`} />
          <h1
            className={`text-white text-lg ml-6 group-hover:text-black font-medium font-mono `}
          >
            Trash
          </h1>
        </Link>
      </List>
    </Box>
  );

  return (
    <div
      className={`bg-[#101418] h-24 flex items-center shadow shadow-[#66B2FF]`}
    >
      <section className={`group w-1/12 flex justify-center items-center`}>
        <Button onClick={toggleDrawer(true)}>
          <Menu
            className={`text-white h-11 w-11 group-hover:text-[#66B2FF] duration-200 ease-in-out p-2 rounded-full`}
          />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </section>
      <section className={`flex h-full justify-center items-center w-1/4`}>
        <h1 className={`text-5xl text-[#66B2FF]`}>
          NOTES
        </h1>
      </section>
      <section className={`flex h-full justify-center items-center w-full `}>
        <h1 className={`text-5xl text-[#66B2FF]`}>
          NOTES
        </h1>
      </section>
    </div>
  );
}
