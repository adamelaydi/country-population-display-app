'use client'
import { useQueryState } from 'nuqs'
function Search() {
    const [search, setSearch] = useQueryState('search')
    return (    
    <>
        <input type='search' value={search || ''}  className="shadow-[0_0px_24px_rgba(0,0,0,0.22)] capitalize h-[45] w-[350] p-[5] rounded-[5px] outline-none max-[390]:w-full" placeholder="Search For a Country ..." onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
            setSearch(search, {
                shallow: false,
            });
            }
        }} />
    </>
    )
}

export default Search