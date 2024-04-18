
import { IClass } from '../types';
import ContentLoading from '../../../components/ContentLoading';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useClasses } from '../api/getClasses';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { DeleteClass } from './DeleteClass';
import { CreateClass } from './CreateClass';


export function ClassesList() {
    const navigate = useNavigate();
    const { data: classes, isLoading } = useClasses();

    const columnHelper = createColumnHelper<IClass>()

    const columns = [
        columnHelper.accessor('className', {
            header: () => <span>Class</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.display({
            header: 'Actions',
            cell: info => (
                <div className='flex flex-row gap-2 items-center'>
                    <span onClick={() => navigate(`/class/${info.row.original._id}`)} className='text-2xl text-blue-500 cursor-pointer'><IoEyeOutline /></span>
                    <DeleteClass id={`${info.row.original._id}`} />
                </div>
            ),
        }),
    ]

    const table = useReactTable({
        data: classes || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (!classes || isLoading) return <ContentLoading />

    return (
        <div>
            <CreateClass/>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}