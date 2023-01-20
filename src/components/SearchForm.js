import React from "react";

 function SearchForm({handleSearch}){
    
    
    const searchstyle = {width: "20", height: "10", background: "transparent", border: "red", padding: "10px"}
   
   
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