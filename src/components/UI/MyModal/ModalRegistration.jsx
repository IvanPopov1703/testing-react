import React from 'react';
import cl from './ModalRegistration.module.css'

const ModalRegistration = ({children, visible, setVisible}) => {

    const rootClasses = [cl.registrationModal];
    console.log('n - ', visible);

    if (visible) {
        console.log('kkk');
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div
                className={cl.registrationModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default ModalRegistration;