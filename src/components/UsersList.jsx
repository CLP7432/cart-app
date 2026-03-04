import {UserRow} from "./UserRow.jsx";

export const UsersList = ({users, handlerRemoveUser, handlerUserSelected}) => {

    return (

        <>
            <h3>Listado de Usuarios</h3>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
                </thead>
                <tbody>

                {users.map(user => (

                    <UserRow
                        key={user.id}
                        user = {user}
                        handlerRemoveUser={handlerRemoveUser}
                        handlerUserSelected={handlerUserSelected}
                    />

                ))}


                </tbody>

            </table>

        </>
    )
}