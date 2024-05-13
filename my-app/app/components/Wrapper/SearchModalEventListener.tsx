"use client";
import { HTMLElementWithShowModal } from "@/app/types/modal";
import React, { useCallback, useEffect } from "react";

type SearchEventListenerProps = {
  children: React.ReactNode;
};

export const openModal = () => {
  const modal = document.getElementById(
    "my_modal_3"
  ) as HTMLElementWithShowModal;
  if (modal) {
    modal.showModal();
  }
};

const SearchModalEventListener = ({ children }: SearchEventListenerProps) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      openModal();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return <>{children}</>;
};

export default SearchModalEventListener;
