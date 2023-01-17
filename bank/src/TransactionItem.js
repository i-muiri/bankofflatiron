export default function TransactionItem({date, description, category, amount}){
    return(
        <tbody>
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
        </tbody>
    )
}