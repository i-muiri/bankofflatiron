import TransactionItem from "../TransactionItem"

export default function Transactions({transactions}){
    return (
        <table>
            <tbody>
            <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            </tr>
            </tbody>

        {transactions.map(trans=>{
            return<TransactionItem
            date={trans.date}
            description={trans.description}
            category={trans.category}
            amount={trans.amount}
            key={trans.id}
            />
        })}
        </table>
    
    )
    }