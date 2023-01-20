import {useState} from "react"
export default function NewTransactionForm({onSubmission}){
    const [formData, setFormData] =useState({date:"",description:"",category:"",amount:"0"})
    
    function handleChange(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        onSubmission(formData)

    }
    return(
        <form onChange={handleChange} onSubmit = {handleSubmit}id="new-trans-form">
            <div className="form-inputs">
                <label htmlFor="date">Date</label>
                <input value={formData.date} name="date" type = "date" id= "date"/>
                <input value={formData.description} name="description" type = "text" placeholder="Description"/>
                <input value={formData.category} name="category" type ="text" placeholder="Category"/>
                <input value={formData.amount} name="amount"type = "number" placeholder="Amount"/>
            </div>

            <button id="addBtn">Add Transaction</button>
        </form>
    )
}