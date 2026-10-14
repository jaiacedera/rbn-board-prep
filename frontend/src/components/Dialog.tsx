import { useEffect, useRef, type ReactNode } from "react";
export default function Dialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open && !ref.current?.open) ref.current?.showModal();
    else if (!open && ref.current?.open) ref.current.close();
  }, [open]);
  return (
    <dialog id="modal" ref={ref} onClose={onClose}>
      <button className="close" aria-label="Close dialog" onClick={onClose}>
        ×
      </button>
      <div id="modal-body">{children}</div>
    </dialog>
  );
}
