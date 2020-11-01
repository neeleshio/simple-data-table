import { useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import { COLUMNS } from './columns'
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import { FcNext } from 'react-icons/fc';
import axios from 'axios'
import '../styles/table.scss'

const Table = () => {

    const [data, setData] = useState([])

    const columns = useMemo(() => COLUMNS, [])
    useMemo(() => {
        axios.get('http://localhost:3000/schools')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    const tableInstance = useTable({
        columns,
        data
    }, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage
    } = tableInstance


    return (
        <>
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="btn">
                <button onClick={() => previousPage()}><GrFormPrevious /></button>
                <button onClick={() => nextPage()}><GrFormNext /></button>
            </div>
        </>
    )
}

export default Table