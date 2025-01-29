// import React from 'react';
//  console.log("User Data:", user); 

// const UserItem = ({ user, onEdit, onDelete }) => {
//   return (
//     <tr>
//       <td>{user.id}</td>
//       <td>{user.firstName}</td>
//       <td>{user.lastName}</td>
//       <td>{user.email}</td>
//       <td>{user.department}</td>
//       <td>
//         <button onClick={() => onEdit(user)}>Edit</button>
//         <button onClick={() => onDelete(user.id)}>Delete</button>
//       </td>
//     </tr>
//   );
// };

// export default UserItem;

import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
  console.log("User Data:", user); // Debugging: Check the user object structure

  // Split the 'name' field into first and last name
  const [firstName, lastName] = user.name ? user.name.split(" ") : ["N/A", ""];

  return (
    <tr>
      <td>{user.id}</td>
      <td>{firstName}</td>  {/* Display first name */}
      <td>{lastName || "N/A"}</td>  {/* Display last name or fallback */}
      <td>{user.email}</td>
      <td>{user.department || "No Department"}</td>  {/* Handle missing department */}
      <td>
         <button onClick={() => { console.log("Editing:", user); onEdit(user); }}>Edit</button>
        <button onClick={() => { console.log("Deleting:", user.id); onDelete(user.id); }}>Delete</button>
      </td>
    </tr>
  );
};

export default UserItem;

