import {UsersList} from "./UsersList.jsx";
import {UserForm} from "./UserForm.jsx";
import {useReducer, useState} from "react";
import {usersReducer} from "../reducer/UsersReducer.js";


const initialUsers = [
    {
        id: 1,
        username: "Marco",
        password: "12345",
        email: "clp7432@example.com"
    }

]

const initialUserForm = {
    id: 0,
    username: "",
    password: "",
    email: "",
}


export const UserApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialUserForm);


    const handlerAddUser = (user) => {

        let type;

        if (user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }

        dispatch(
            {
                type: type,
                payload: user,
            }
        )
    }

    const handlerRemoveUser = (id) => {
        //console.log(id);

        dispatch({
            type: 'removeUser',
            payload: id
        })
    }

    const handlerUserSelected = (user) => {
        console.log(user);
        setUserSelected({...user})
    }


    return (

        <>
            <div className="container my-4">
                <h2>User App</h2>

                <div className="row">
                    <div className="col">
                        <UserForm
                            handlerAddUser={handlerAddUser}
                            initialUserForm={initialUserForm}
                            userSelected={userSelected}
                        />

                    </div>
                    <div className="col">

                        {users.length === 0
                            ? <div className="alert alert-warning">No hay usuarios</div>
                            : (
                                <UsersList
                                    users={users}
                                    handlerRemoveUser={handlerRemoveUser}
                                    handlerUserSelected={handlerUserSelected}
                                />
                            )
                        }

                    </div>

                </div>

            </div>
        </>
    )
}