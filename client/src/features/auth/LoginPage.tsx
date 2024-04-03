import { SignIn, } from "@clerk/clerk-react";

export const Login = () => {

    return (
        <div className="min-h-screen py-20 flex justify-center items-center">
            <SignIn redirectUrl="/home" />
        </div>
    )
}

export default Login