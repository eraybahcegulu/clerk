
import Sidebar from "../home/components/SideBar"
import GetClass from "./components/GetClass"

const ClassPage = () => {
    return (
        <div className='h-screen min-h-screen max-h-screen flex flex-row'>
            <Sidebar />
            <GetClass />
        </div>
    )
}

export default ClassPage