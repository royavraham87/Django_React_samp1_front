import React, { useState } from 'react';
import axios from 'axios';

// const Login = () => {
//     const My_Server= 'http://127.0.0.1:8000/api/login/'
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [token, settoken] = useState(" ")
//   const [logged, setlogged] = useState(false)


//   const handleLogin = () => {
//       axios.post(My_Server,{username,password}).then(res=>settoken(res.data.access))
//       setlogged(true)
//     } 
// handleLogin() 

  
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
