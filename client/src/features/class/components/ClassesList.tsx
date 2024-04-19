
import { Table } from 'antd';
import { useGetClasses } from '../api/queries';
import { classTableColumns } from '../columns';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';

export function ClassesList() {

    const { data: classes, isLoading } = useGetClasses();


    if(isLoading) return <LoadingSpinner/>
    if (!classes) return <Error/>

    return (
            <Table
                rowKey="_id"
                columns={classTableColumns}
                dataSource={classes.data}
                className="w-full max-w-[400px]"
                scroll={{ y: 400, x: 220 }}
            />
    )
}