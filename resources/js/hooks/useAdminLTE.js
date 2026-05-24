// resources/js/hooks/useAdminLTE.js
import { useEffect } from 'react';

const useAdminLTE = () => {
    useEffect(() => {
        // Initialize AdminLTE components
        if (window.$ && window.$.fn) {
            // Initialize tooltips
            window.$('[data-toggle="tooltip"]').tooltip();
            
            // Initialize dropdowns
            window.$('.dropdown-toggle').dropdown();
            
            // Initialize sidebar treeview if needed
            window.$('[data-widget="treeview"]').Treeview('init');
        }

        // Add AdminLTE classes to body
        document.body.classList.add('sidebar-mini', 'layout-fixed');

        return () => {
            // Cleanup if needed
            if (window.$ && window.$.fn) {
                window.$('[data-toggle="tooltip"]').tooltip('dispose');
            }
        };
    }, []);
};

export default useAdminLTE;