import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export const PortalModal = ({ children, wrapperId }) => {
  const [portalElement, setPortalElement] = useState();

  const createWrapperAndAppendToBody = (elementId) => {
    const element = document.createElement("div");
    element.setAttribute("id", elementId);
    document.body.appendChild(element);

    return element;
  };

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let portalCreated = false;

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
      portalCreated = true;
    }

    setPortalElement(element);

    return () => {
      if (portalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
};