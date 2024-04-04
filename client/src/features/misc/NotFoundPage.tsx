import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd'
const NotFoundPage = () => {
    const user = useUser();
    const navigate = useNavigate();
    return (
        <div className="min-h-screen p-20 flex justify-center items-center ">
            {
                user?.isSignedIn
                    ?

                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button onClick={() => navigate('/home')} color='primary'>Home</Button>}
                    />

                    :
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button onClick={() => navigate('/login')} color='primary'>Back Login</Button>}
                    />
            }
        </div>
    )
}

export default NotFoundPage