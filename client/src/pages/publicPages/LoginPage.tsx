import { SignIn, } from "@clerk/clerk-react";

export const Login = () => {

    return (
        <SignIn redirectUrl="/home" />
    )
}

export default Login