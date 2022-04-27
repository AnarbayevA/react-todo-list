import "./user.css"

// props ga istalgan nom bersak bo'ladi. U App dan keladigan malumotni oladi. Bis uni objext ko'rinishida qabul qilib olishimiz kerak va uni ichidagi (props.name) kabi olib olishimiz kerak

// export const User = (props) =>{
//     console.log(props);
//     return(
//         <li className="user">
//             <img src={props.img} alt="User img" />
//             <h3>{props.name}</h3>
//             <p>{props.age}</p>
//         </li>
//     )
// }

// desturiktrizatsiya qilib olish 

export const User = ({img, name, age}) =>{
    return(
        <li className="user">
            <img src={img} alt="User img" />
            <h3>{name}</h3>
            <p>{age} yosh</p>
        </li>
    )
}