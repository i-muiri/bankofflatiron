import { useState } from "react"
export default function searchForm(onSearch){

    const [search, setSearch] = useState("")
    function handleChange(event){
        setSearch(event.target.value)
        onSearch(search)
    }

    return (
        <div>
            <form>
                <input value="search" type="text" name="search" placeholder="Search" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}