import { Paperclip, Plus, SearchIcon } from "lucide-react";
import Navbar from "../utils/Navbar";

import TemporaryDrawer from "../utils/Navbar";
import NoteCard from "./NoteCards";

const AllNotes = () => {
  return (
    <div className={`bg-[#101418] h-full `}>
      <Navbar />
      <div className={`search_bar_and_other_buttons pt-10`}>
        <section className={`searchbar justify-center items-center flex p-1`}>
          <label>
            <Plus className={`mr-5 text-[#66b2ff]`} />
          </label>
          <input
            className={` w-96 p-2 rounded-lg bg-[#13283F] text-[#66b2ff] border border-[#66b2ff] font-mono `}
            id="text"
            type="text"
            placeholder="New Note"
          ></input>
          <Paperclip className={`ml-5 text-[#66b2ff]`} />
        </section>
      </div>
      <div className={`w-full h-full flex flex-col justify-center items-center pt-10`}>
        <div className={`w-4/5 h-full flex justify-center items-center`}>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
