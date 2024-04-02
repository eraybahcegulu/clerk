import { SignUp } from "@clerk/clerk-react";

export const Register = () => {

    return (
        <div className="min-h-screen py-20 flex justify-center items-center">
            <SignUp />
        </div>
    )
}

export default Register