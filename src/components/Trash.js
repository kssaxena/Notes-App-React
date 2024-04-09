import { BellRing, Paperclip, Plus, SearchIcon, Trash2 } from "lucide-react";
import Navbar from "../utils/Navbar";

const Trash = () => {
  return (
    <div
      className={`bg-[#101418] h-screen overflow-x-hidden overflow-y-scroll scroll-smooth`}
    >
      <Navbar />
      <div className={`search_bar_and_other_buttons pt-10 `}>
        <section className={`searchbar justify-center items-center flex p-1`}>
          <label>
            <Plus className={`mr-5 text-[#66b2ff] cursor-pointer`} />
          </label>
          <input
            className={` w-96 p-2 rounded-lg bg-[#13283F] text-[#66b2ff] border border-[#66b2ff] font-mono shadow-sm hover:shadow-md hover:shadow-[#66b2ff] duration-200 ease-in-out shadow-[#66b2ff] `}
            id="text"
            type="text"
            placeholder="New Archive"
          ></input>
        </section>
      </div>
      <div
        className={`flex flex-col justify-center items-center h-full w-full text-[#66b2ff]`}
      >
        <Trash2 className={`h-28 w-28`} />
        <h1>Your Notes will automatically be deleted after 5 Days</h1>
      </div>
    </div>
  );
};

export default Trash;
