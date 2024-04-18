import { TableColumnsType } from "antd";
import { IClass } from "../../types/index";
import { DeleteClass } from "../DeleteClass";

export const classTableColumns: TableColumnsType<IClass> = [
    {
        title: 'Class Name',
        dataIndex: 'className',
        width: '15%',
    },
    {
        title: 'Actions',
        width: '12%',
        render: (_, record: IClass) => (
            <div className='flex flex-row justify-between text-2xl h-full w-full max-h-full'>
                <DeleteClass classId={record._id} />
            </div>
        ),
    },
];