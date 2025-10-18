import React from "react";
interface PopupProps {
    message: string;
    show: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    chatbotRect?: DOMRect | null;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
//# sourceMappingURL=Popup.d.ts.map