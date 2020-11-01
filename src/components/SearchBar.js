
import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import '../styles/searchbar.scss'

const Search = ({ search, setSearch }) => {
    const [value, setValue] = useState(search)

    const onChange = useAsyncDebounce(value => {
        setSearch(value || undefined)
    }, 300)

    return (
        <div className="searchbar">
            <input value={value || ''} placeholder="search" onChange={(e) => {
                setValue(e.target.value)
                onChange(e.target.value)
            }} />
        </div>
    )
}

export default Search;