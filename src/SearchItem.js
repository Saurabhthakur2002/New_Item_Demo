const SearchItem = ({search, setSearch}) => {
    return(
        <div>
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search"></label>
                <input id="search" type="text" role="searchbox" placeholder="Search Items" value={search} onChange={(e) => setSearch(e.target.value)} />

            </form>
        </div>
    )
}
export default SearchItem;