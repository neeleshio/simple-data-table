import Filter from './Filter'

export const COLUMNS = [
    {
        Header: 'Sl.No',
        accessor: 'id',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'Block',
        accessor: 'block',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'Cluster',
        accessor: 'cluster',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'School Id',
        accessor: 'schoolid',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'School Name',
        accessor: 'schoolname',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'Category',
        accessor: 'category',
        Filter: Filter
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        Filter: Filter
    },
    {
        Header: 'Medium',
        accessor: 'medium_of_inst',
        Filter: Filter
    },
    {
        Header: 'Address',
        accessor: 'address',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'Area',
        accessor: 'area',
        Filter: Filter,
        disableFilters: true
    },
    {
        Header: 'Pincode',
        accessor: 'pincode',
        Filter: Filter,
        disableFilters: true

    },
    {
        Header: 'Landmark',
        accessor: 'landmark',
        Filter: Filter,
        disableFilters: true
    }
]