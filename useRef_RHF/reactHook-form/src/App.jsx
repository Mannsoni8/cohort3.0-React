import React, { useState } from "react";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggel, setToggel] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  return (
    <div className="p-3 h-screen flex flex-col gap-4 bg-gray-300">
      <NavBar setToggel={setToggel} />
      {toggel ? (
        <div className="flex gap-4">
          {users.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                user={elem}
                setEditUser={setEditUser}
                setToggle={setToggel}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70%]">
          <Form
            key={editUser?.id || "new"}
            setUsers={setUsers}
            setToggel={setToggel}
            editUser={editUser}
            setEditUser={setEditUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;
