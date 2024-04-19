import React from 'react';
import Sidebar from './Sidebar';

const PrivateLayout = ({ content }: { content: React.ReactNode }) => {

    return (
        <div className='h-screen w-screen flex flex-row bg-slate-400'>
            <Sidebar />
            <div className="h-full w-full overflow-auto p-4 flex flex-col justify-start items-center gap-5">
                {content}
            </div>
        </div>
    );
};

export default PrivateLayout;
