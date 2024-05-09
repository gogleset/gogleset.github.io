"use client";

import { useEffect, useState } from "react";

const SearchModal = () => {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
{
  /* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */
}

export default SearchModal;
