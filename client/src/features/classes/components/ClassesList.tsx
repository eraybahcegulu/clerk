
import ContentLoading from '../../../components/ContentLoading';
import { CreateClass } from './CreateClass';
import { Table } from 'antd';
import { classTableColumns } from './columns';
import { useClasses } from '../api/queries';

export function ClassesList() {

    const { data: classes, isLoading } = useClasses();


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