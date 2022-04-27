import { useState } from "react";
import { User } from "./components/users";
import { List } from "./components/List/LIst";
import { ListItem } from "./components/List/ListItem";

// name ni o'rniga istalgan nom bersak bo'ladi u userga object ko'rinishida boradi bu bizga element qo'shish uchun qulay

// export function Ap(){
//   return(
//     <div className="App">
//       <ul>
//         <User age='21' img="https://picsum.photos/id/2/200" name="Birnasayev Kimdir" /> 
//         <User age='14' img="https://picsum.photos/id/3/200" name="Ketmonov Teshavoy1" />
//         <User age='16' img="https://picsum.photos/id/1/200" name="Ketmonov Teshavoy" />
//         <User age='98' img="https://picsum.photos/id/4/200" name="Ketmonov Teshavoy2" />
//         <User age='45' img="https://picsum.photos/id/5/200" name="Palomchiyev Teshavoy3" />
//       </ul>
//     </div>
//   )
// }


export function Add(){
  let todos = [
    {
      id: 1,
      text: 'Home work',
      isComplate: false,

    },

    {
      id: 2,
      text: 'Home work-2',
      isComplate: false,

    },

  ];
  return(

    <div>
      <input type="text" placeholder='Todo text' />

      <List>
        {todos.map((todo)=>(
          <ListItem text={todo.text} />
        ))}
      </List>
    </div>
    
  );


}

// export function App(){
  // pastadi letda count bu funcsiya nomi ikkinchisi (seCount) count ni qiymatini o'zgartirib beradigan funksiay
  // let [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  // function IncrementCount(){
  //   setCount(count + 1)
  // }
  // return(

  //   <div>
  //     <input type="text" placeholder='Todo text' />
  //     <List>
  //       {todos.map((todo)=>(
  //         <ListItem text={todo.text} />
  //       ))}
        
  //     </List>
  //   </div>
    
    // <div>
    //   <input type="text" onChange={(evt)=>setCount(evt.target.value)} />
    //   <h3>{count}</h3>
    // </div>

    // <div>
    //   <button onClick={IncrementCount}>Increment</button>
    //   <h1>{count}</h1>
    // </div>
//   );
// } 




