// // resources/js/Components/Layout/FlashMessages.jsx
// import React from 'react';
// import { usePage } from '@inertiajs/react';

// const FlashMessages = () => {
//     const { flash } = usePage().props;

//     if (!flash.success && !flash.error && !flash.warning && !flash.info) {
//         return null;
//     }

//     return (
//         <div className="flash-messages">
//             {flash.success && (
//                 <div className="alert alert-success alert-dismissible m-3">
//                     <button type="button" className="close" data-dismiss="alert">×</button>
//                     {flash.success}
//                 </div>
//             )}
            
//             {flash.error && (
//                 <div className="alert alert-danger alert-dismissible m-3">
//                     <button type="button" className="close" data-dismiss="alert">×</button>
//                     {flash.error}
//                 </div>
//             )}

//             {flash.warning && (
//                 <div className="alert alert-warning alert-dismissible m-3">
//                     <button type="button" className="close" data-dismiss="alert">×</button>
//                     {flash.warning}
//                 </div>
//             )}

//             {flash.info && (
//                 <div className="alert alert-info alert-dismissible m-3">
//                     <button type="button" className="close" data-dismiss="alert">×</button>
//                     {flash.info}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FlashMessages;

import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

const FlashMessages = () => {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(true);

    const hasMessage =
        flash.success || flash.error || flash.warning || flash.info;

    // ✅ VERY IMPORTANT: reset visibility when flash changes
    useEffect(() => {
        if (hasMessage) {
            setVisible(true);
        }
    }, [flash.success, flash.error, flash.warning, flash.info]);

    if (!hasMessage || !visible) {
        return null;
    }

    return (
        <div className="flash-messages">
            {flash.success && (
                <div className="alert alert-success alert-dismissible m-3">
                    <button
                        type="button"
                        className="close"
                        onClick={() => setVisible(false)}
                    >
                        ×
                    </button>
                    {flash.success}
                </div>
            )}
            
            {flash.error && (
                <div className="alert alert-danger alert-dismissible m-3">
                    <button
                        type="button"
                        className="close"
                        onClick={() => setVisible(false)}
                    >
                        ×
                    </button>
                    {flash.error}
                </div>
            )}

            {flash.warning && (
                <div className="alert alert-warning alert-dismissible m-3">
                    <button
                        type="button"
                        className="close"
                        onClick={() => setVisible(false)}
                    >
                        ×
                    </button>
                    {flash.warning}
                </div>
            )}

            {flash.info && (
                <div className="alert alert-info alert-dismissible m-3">
                    <button
                        type="button"
                        className="close"
                        onClick={() => setVisible(false)}
                    >
                        ×
                    </button>
                    {flash.info}
                </div>
            )}
        </div>
    );
};

export default FlashMessages;


