const NoteCard = () => {
    return (
      <div
        className={`Notes w-60 h-60 m-1 bg-[#13283F] rounded-lg p-2 border border-[#66b2ff]`}
      >
        <section className={`heading`}>
          <input
            className={`w-full border-b font-mono border-[#66b2ff] bg-[#13283f] text-[#66b2ff] p-2`}
            id="text"
            type="text"
            placeholder="Heading"
          ></input>
        </section>
        <section className={`description`}>
          <textarea
            className={`w-full h-full resize-y bg-[#13283f] p-2 overflow-x-hidden overflow-y-auto text-[#66b2ff] font-mono`}
            placeholder="Write.."
          ></textarea>
        </section>
      </div>
    );
};

export default NoteCard;