import { TableColumnsType } from "antd";
import { IClass } from "../types/index";
import { DeleteClass } from "../components/DeleteClass";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

export const classTableColumns: TableColumnsType<IClass> = [
    {
        title: 'Class Name',
        dataIndex: 'name',

    },
    {
        title: 'Actions',

        render: (_, record: IClass) => (
            <div className='flex flex-row items-center gap-2'>
                <Link to={`/class/${record._id}`}> 
                <span className="text-2xl"><IoEyeOutline /></span>
                </Link>
                <DeleteClass classId={record._id} />
            </div>
        ),
    },
];
