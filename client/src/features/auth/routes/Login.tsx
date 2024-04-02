import { SignInButton, SignedOut } from "@clerk/clerk-react";

export const Login = () => {
    return (
        <header>
            <SignedOut>
                <SignInButton mode="modal" redirectUrl="/home" />
            </SignedOut>
        </header>
    )
}

export default Login