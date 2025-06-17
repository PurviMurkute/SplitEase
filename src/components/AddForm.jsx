import React, { useState } from "react";
import Header from "./Header";
import toast, {Toaster} from "react-hot-toast";


const AddForm = () => {
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");
  const [newMember, setNewMember] = useState("");
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    if (newMember === "") return;

    setMembers([...members, newMember]);
    setNewMember("");
  };

  const handleSplit = () => {
    if(!groupName || !userName || !members){
        toast.error("All fields are required")
        return;
    }else if(members.length <= 1){
        toast.error("Add atleast 2 members")
        return;
    }else{
        window.location.href = '/amount';
    }
  }

  return (
    <div>
      <Header />

      <form className="block mx-auto w-[400px] bg-gray-200 p-5 mt-15 shadow-xl" onSubmit={(e)=>{e.preventDefault()}}>
        <h1 className="text-center font-bold text-blue-600 my-5 text-2xl">
          Split Expenses
        </h1>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
          className="px-4 py-2 w-[80%] block mx-auto my-5 border-1 border-blue-500 shadow-xl focus:outline-none"
        />
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="px-4 py-2 w-[80%] block mx-auto my-5 border-1 border-blue-500 shadow-xl focus:outline-none"
        />
        <label className="block ms-10">Group Members:</label>
        <div className="flex justify-center items-center my-5">
          <input
            type="text"
            placeholder="Add Group Members"
            value={newMember}
            onChange={(e) => {
              setNewMember(e.target.value);
            }}
            className="px-4 py-2 me-2 border-1 border-blue-500 shadow-xl focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAddMember}
            className="bg-blue-600 text-white px-4 py-2 font-bold cursor-pointer"
          >
            Add
          </button>
        </div>
        <div className="mx-10">
          {members.map((mem, i) => {
            return (
              <p key={i} className="m-1 bg-gray-300 px-1 inline-block">
                {mem}
              </p>
            );
          })}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 font-bold block mx-auto my-5 cursor-pointer" onClick={handleSplit}>
          Split Expence
        </button>
      </form>
      <Toaster/>
    </div>
  );
};

export default AddForm;
