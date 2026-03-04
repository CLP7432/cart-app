import {use} from "react";

export const UserRow = ({user, handlerRemoveUser,handlerUserSelected}) => {



    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }

    return (

        <>
            <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handlerUserSelected({
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            //password: user.password  ///esto no esta permitido
                        })}
                    >
                        update
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => onRemoveUser(user.id)}
                    >
                        remove
                    </button>
                </td>
            </tr>
        </>
    )
}