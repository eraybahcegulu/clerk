import React from 'react';

const PublicLayout = ({ content }: { content: React.ReactNode }) => {
    return (
        <div className="h-screen py-20 flex justify-center items-center">
            {content}
        </div>
    );
};

export default PublicLayout;
