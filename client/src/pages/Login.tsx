import { SignInButton, SignedOut } from "@clerk/clerk-react";

const Login = () => {
    return (
        <header>
            <SignedOut> 
            <SignInButton mode="modal" redirectUrl="/home" />
            </SignedOut>
        </header>
    )
}

export default Login