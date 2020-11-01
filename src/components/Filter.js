import '../styles/filter.scss'

const Filter = ({ column }) => {
    const { filterValue, setFilter } = column

    return (
        <div className="filter">
            <input value={filterValue || ''} placeholder="filter" onChange={(e) => setFilter(e.target.value)} />
        </div>
    )
}

export default Filter;