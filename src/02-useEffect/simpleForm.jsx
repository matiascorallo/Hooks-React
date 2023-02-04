import { useEffect } from "react"
import { useForm } from "../hook/useForm";

export const SimpleForm = ( ) => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm ({

    username: '',
    email: '',
    password: '',
});

  // const {username, email, password} = formState;

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />



        <input type="email"
        className="form-control mt-3"
        placeholder="ejemplodemail@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
        />

        <input type="text"
        className="form-control mt-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}    
        />

        <input type="password"
        className="form-control mt-3"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
        />

      <button onClick={onResetForm} className="btn btn-primary m-3">Borrar</button>


    </>
  )
}