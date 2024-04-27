
import { Table } from 'antd';

import { studentTableColumns } from '../columns';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useGetStudents } from '../api/queries';

export function StudentsList() {

    const { data: students, isLoading } = useGetStudents();

    if(isLoading) return <LoadingSpinner size='lg'/>
    if (!students) return <Error/>

    return (
            <Table
                rowKey="_id"
                columns={studentTableColumns}
                dataSource={students.data}
                className="w-full max-w-[800px]"
                scroll={{ y: 400, x: 600 }}
            />
    )
}