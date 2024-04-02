import { quantum } from 'ldrs'
const UserLoading = () => {

    quantum.register()

    return (
        <div className='h-screen flex justify-center items-center p-20'>
            <l-quantum size={40}>
            </l-quantum>
        </div>
    )
}

export default UserLoading