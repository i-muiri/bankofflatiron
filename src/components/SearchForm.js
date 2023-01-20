import React from "react";
import { useState } from "react"
 function SearchForm(onSearch){
    
    
    const searchstyle = {width: "20", height: "10", background: "transparent", border: "blue"}
   
   
    return (
        <div className="search">
                <input style = {searchstyle}
                type="text"
                placeholder="Search Transactions"
                onChange={handleSearch}/>
                
           
        </div>
    )
}

export default SearchForm;