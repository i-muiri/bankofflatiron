import { useState } from "react"
export default function SearchForm(onSearch){

    const [search, setSearch] = useState("")
    function handleChange(event){
        setSearch(event.target.value)
        onSearch(search)
    }

    return (
        <div>
            <form id="search-form">
                <input id="search" type="text" name="search" placeholder="Search" />
                <button id = "search-form button" type="submit">Search</button>
            </form>
        </div>
    )
}