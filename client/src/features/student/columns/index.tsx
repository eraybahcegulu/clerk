import { TableColumnsType } from "antd";

import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IStudent } from "../types";
import { DeleteStudent } from "../components/DeleteStudent";
import { IClass } from "@/features/class/types";

export const studentTableColumns: TableColumnsType<IStudent> = [
    {
        title: 'Student Name',
        dataIndex: 'name',

    },
    {
        title: 'Student Surname',
        dataIndex: 'surname',

    },
    {
        title: 'Student No',
        dataIndex: 'no',

    },
    {
        title: 'Actions',

        render: (_, record: IStudent) => (
            <div className='flex flex-row items-center gap-2'>
                <Link to={`/student/${record._id}`}> 
                <span className="text-2xl"><IoEyeOutline /></span>
                </Link>
                <DeleteStudent studentId={record._id} />
            </div>
        ),
    },
];

export const studentClassTableColumns: TableColumnsType<IClass> = [
    {
        title: 'Class Name',
        dataIndex: 'class',
        render: (item?) => item?.name,
    },

];