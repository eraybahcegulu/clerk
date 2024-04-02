import { useUser } from '@clerk/clerk-react';

const NotFoundRoute = () => {
    const user = useUser();

    return (
        <>

            {
                user?.isSignedIn
                    ?
                    <div>Not Found. Return home</div>
                    :
                    <div>Not Found. Try login</div>
            }
        </>
    )
}

export default NotFoundRoute