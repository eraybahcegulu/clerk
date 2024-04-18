import React from 'react';
import Sidebar from './Sidebar';


const PrivateLayout = ({ content }: { content: React.ReactNode }) => {
    return (
        <div className='h-screen flex flex-row'>
            <Sidebar />
            <div className="h-full w-full overflow-auto p-2">
                {content}
            </div>
        </div>
    );
};

export default PrivateLayout;
