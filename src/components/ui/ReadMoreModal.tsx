import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type ReadMoreModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function ReadMoreModal({
  title,
  children,
  isOpen,
  onClose,
}: ReadMoreModalProps) {
  const titleId = React.useId();

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}>
      <button
        type="button"
        className="absolute inset-0 bg-neutral-900/80 cursor-default"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border border-light-now bg-white p-6 shadow-xl dark:bg-neutral-900">
        <div className="flex items-start justify-between gap-4">
          <h2
            id={titleId}
            className="font-judul text-2xl font-bold text-neutral-900 dark:text-white">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark-now text-white hover:bg-green-now hover:text-neutral-900 dark:bg-white-now dark:text-neutral-900 dark:hover:bg-yellow-now dark:hover:text-white"
            aria-label="Close modal">
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 leading-6 text-dark-now dark:text-white-now">
          {children}
        </div>
      </div>
    </div>
  );
}
