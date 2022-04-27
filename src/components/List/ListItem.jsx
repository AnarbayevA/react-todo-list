export const ListItem = ({text})=>{
    return(
        <li className="d-flex gap-3 mb-3 mt-3">
            <input type="checkbox" />
            <h3>{text}</h3>
            <button className="btn btn-warning">Edit</button>
            <button className="btn btn-danger">Delete</button>

        </li>
    )
}