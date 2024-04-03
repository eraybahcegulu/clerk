import SideBar from '../components/SideBar'
import { useClasses } from '../../classes/api/getClasses';

const Home = () => {

    const query = useClasses();

    if(query.isLoading) return <div>loading...</div>
    console.log(query)
    return (
        <div className='min-h-screen flex'>
            <SideBar />

        </div>
        
    )
}

export default Home