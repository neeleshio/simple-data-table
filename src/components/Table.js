import { useMemo, useState } from 'react'
import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table'
import { COLUMNS } from './columns'
import SearchBar from './SearchBar'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { BeatLoader } from 'react-spinners'
import axios from 'axios'
import '../styles/table.scss'

const Table = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = useMemo(() => COLUMNS, [])
    useMemo(() => {
        axios.get('http://localhost:3000/schools')
            .then(response => {
                setData(response.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        state,
        setGlobalFilter
    } = tableInstance

    const { globalFilter } = state;


    return (
        <>
            {loading ? (
                <>
                    <SearchBar search={globalFilter} setSearch={setGlobalFilter} />
                    <table {...getTableProps}>
                        <thead>
                            {headerGroups.map((headerGroups) => (
                                <tr {...headerGroups.getHeaderGroupProps()}>
                                    {headerGroups.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <div>{column.canFilter ? column.render("Filter") : null}</div>
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? <BsArrowUp /> : <BsArrowDown />) : ''}
                                            </span>
                                        </th>
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
            ) :
                <div className="loader">
                    <BeatLoader color='green' Loading size={50} />
                </div>
            }
        </>
    )
}

export default Table