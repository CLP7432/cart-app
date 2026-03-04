import {useEffect, useState} from "react";


export const UserForm = ({handlerAddUser, initialUserForm, userSelected}) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {id, username, password, email} = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password: "",
        })
    }, [userSelected]);


    const onInputChange = ({target}) => {
        //console.log(target.value);

        const {name, value} = target;

        setUserForm(
            {
                ...userForm,
                [name]: value,
            }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(userForm);

        if (!username || (!password && id === 0) || !email) {
            alert("Se deben completar los campos del formulario");
            return;
        }
        //console.log(userForm);

        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }


    return (

        <>
            <h3>Formulario de Usuarios</h3>
            <form onSubmit={onSubmit}>
                <input
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />

                { id > 0
                    ? ''
                    :
                    <input
                        className="form-control my-3 w-75"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}

                    />

                }


                <input
                    className="form-control my-3 w-75"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
                <input
                    type="hidden"
                    name="id"
                    value={id}
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    {id > 0 ? 'Editar' : 'Crear'}
                </button>

            </form>
        </>
    )
}