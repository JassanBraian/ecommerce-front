import { useContext } from "react";
import { Button } from "react-bootstrap";
import UsersContext from "../../../context/users/UsersContext";
import "../../../css/entities/Users/UsersList.css";

const UsersList = ({ user }) => {
  const { changeUserRole } = useContext(UsersContext);

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td className="btn-column">
        <Button
          variant="warning"
          size="sm"
          onClick={() => {
            changeUserRole(user);
          }}
        >
          {user.role === "admin" ? "Quitar admin" : "Hacer admin"}
        </Button>
      </td>
    </tr>
  );
};

export default UsersList;
