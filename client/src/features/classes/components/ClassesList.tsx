
import { IClass } from '../types';
import ContentLoading from '../../../components/ContentLoading';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useClasses } from '../api/getClasses';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";


export function ClassesList() {
    const navigate = useNavigate();
    const { data: classes, isLoading } = useClasses();

    const columnHelper = createColumnHelper<IClass>()

    const columns = [
        columnHelper.accessor('_id', {
            header: () => <span>id</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('className', {
            header: () => <span>Class Name</span>,
            cell: info => info.getValue(),
        }),
        columnHelper.display({
            header: 'Actions',
            cell: info => (
                <span onClick={() => navigate(`/class/${info.row.original._id}`)} className='text-2xl text-red-500 cursor-pointer'>  <IoEyeOutline />  </span>
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