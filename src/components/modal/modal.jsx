import { useCallback, useEffect, useRef } from "react";
import { PortalModal } from "./portal-modal";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import "./modal.css";

export const Modal = ({ children, show, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = () => onClose();

  const handleKeyPress = useCallback((event) => {
    if (event.key === "Escape") onClose();
  }, []);

  useOutsideClick(modalRef, handleClickOutside);

  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [handleKeyPress, show]);

  return (
    <>
      {show && (
        <PortalModal wrapperId="modal-portal">
          <div className="overlay">
            <div className="modal-container" ref={modalRef}>
              <div className="close-btn" onClick={() => onClose()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>

              <div>{children}</div>
            </div>
          </div>
        </PortalModal>
      )}
    </>
  );
};