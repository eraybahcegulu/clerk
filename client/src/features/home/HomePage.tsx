import Panels from "./components/Panels"
import Sidebar from "./components/SideBar"

const HomePage = () => {
    return (
        <div className='h-screen min-h-screen max-h-screen flex flex-row'>
            <Sidebar />
            <div className="overflow-auto flex flex-col md:flex-row gap-5 p-4">
                <Panels />
            </div>

        </div>

    )
}

export default HomePage