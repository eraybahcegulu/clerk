

import { CreateClass } from './CreateClass';
import { Table } from 'antd';
import ContentLoading from '@/components/ContentLoading';
import { useGetClasses } from '../api/queries';
import { classTableColumns } from '../columns';

export function ClassesList() {

    const { data: classes, isLoading } = useGetClasses();

    if (!classes || isLoading) return <ContentLoading />

    return (
        <>
            <CreateClass />
            <Table
                rowKey="_id"
                columns={classTableColumns}
                dataSource={classes.data}
                className="max-w-[475px] md:max-w-[750px] xl:max-w-[900px]"
                scroll={{ y: 630, x: 800 }}
            />
        </>
    )
}