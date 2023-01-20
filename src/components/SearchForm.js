import React from "react";

 function SearchForm({handleSearch}){
    
    
    const searchstyle = {width: "25", height: "10", background: "transparent"}
   
   
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