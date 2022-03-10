import React from 'react';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "moderator-modal active" : "moderator-modal"} onClick={()=>setActive(false)}>
            <div className={active ? "moderator_modal__content active" : "moderator_modal__content"} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;