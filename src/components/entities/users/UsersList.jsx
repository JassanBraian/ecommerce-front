import React from 'react'

const UsersList = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.mail}</td>
      <td>{user.role}</td>
    </tr>
  )
}

export default UsersList