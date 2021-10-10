import { useMemo } from 'react'
import '../styles/filter.scss'

const Filter = ({ column }) => {
    const { filterValue, setFilter, preFilteredRows, id } = column

    const options = useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => { options.add(row.values[id]) })

        return [...options.values()]
    }, [id, preFilteredRows])


    return (
        <select
            value={filterValue}
            onChange={e => { setFilter(e.target.value || undefined) }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Filter;