import { UserButton,  } from '@clerk/clerk-react'

const Home = () => {
    return (
        <div>  <UserButton afterSignOutUrl='/login' /></div>
    )
}

export default Home