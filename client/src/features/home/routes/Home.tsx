import SideBar from '../components/SideBar'
import { useClasses } from '../../classes/api/getClasses';

const Home = () => {

    const usersQuery = useClasses();

    if(usersQuery.isLoading) return <div>loading...</div>
    console.log(usersQuery)
    return (
        <div className='min-h-screen flex'>
            <SideBar />

        </div>
        
    )
}

export default Home