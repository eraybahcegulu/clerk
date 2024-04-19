import { TableColumnsType } from "antd";
import { IClass } from "../types/index";
import { DeleteClass } from "../components/DeleteClass";
import { Link } from "react-router-dom";

export const classTableColumns: TableColumnsType<IClass> = [
    {
        title: 'Class Name',
        dataIndex: 'className',

    },
    {
        title: 'Actions',

        render: (_, record: IClass) => (
            <div className='flex flex-row justify-between text-2xl h-full w-full max-h-full'>
                <Link to={`/class/${record._id}`}>Go to Class</Link>
                <DeleteClass classId={record._id} />
            </div>
        ),
    },
];
