
import { Table } from 'antd';
import { studentClassTableColumns } from '../columns';
import { useGetStudentClasses } from '../api/queries';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';


export function StudentClassesList({ studentId }: { studentId: string }) {

    const {data: studentClasses, isLoading } = useGetStudentClasses({studentId});

    if(isLoading) return <LoadingSpinner size='lg'/>
    if (!studentClasses) return <Error/>

    return (
        <Table
            rowKey="_id"
            columns={studentClassTableColumns}
            dataSource={studentClasses.data}
            className="w-full max-w-[800px]"
            scroll={{ y: 400, x: 700 }}
        />
    )
}