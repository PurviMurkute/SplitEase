import React, { useState } from "react";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";
import SplitModal from "./SplitModal";

const AddForm = () => {
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");
  const [amount, setAmount] = useState();
  const [newMember, setNewMember] = useState("");
  const [members, setMembers] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleAddMember = () => {
    if (newMember === "") return;

    setMembers([...members, newMember]);
    setNewMember("");
  };

  const handleSplit = () => {
    if (!groupName || !userName || !amount) {
      toast.error("All fields are required");
      return;
    } else if (members.length <= 1) {
      toast.error("Add atleast 2 members");
      return;
    } else if (amount <= 0) {
      toast.error("Enter valid amount");
      return;
    } else {
      setIsModelOpen(true);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#f9fafb] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          }}
        />
        {!isModelOpen ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <form
              className="block mx-auto w-[400px] bg-gray-200 p-5 shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h1 className="text-center font-bold text-blue-600 my-5 text-2xl">
                Split Expenses
              </h1>
              <label className="ms-10">Split for?</label>
              <input
                type="text"
                placeholder="Group Name"
                value={groupName}
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
                className="px-4 py-2 w-[80%] block mx-auto mb-5  mt-1 border-1 border-blue-500 shadow-xl focus:outline-none"
              />
              <label className="ms-10">Your name?</label>
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                className="px-4 py-2 w-[80%] block mx-auto mb-5 mt-1 border-1 border-blue-500 shadow-xl focus:outline-none"
              />
              <label className="ms-10">Amount?</label>
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                }}
                className="px-4 py-2 w-[80%] block mx-auto mb-5 mt-1 border-1 border-blue-500 shadow-xl focus:outline-none"
              />
              <label className="ms-10">Group Members:</label>
              <div className="flex justify-center items-center my-b  mt-1">
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
                    <p
                      key={i}
                      className="my-2 me-1 bg-gray-300 px-1 inline-block"
                    >
                      {mem}
                    </p>
                  );
                })}
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 font-bold block mx-auto my-5 cursor-pointer"
                onClick={handleSplit}
              >
                Split Expence
              </button>
            </form>
          </div>
        ) : null}
        <Toaster />

        <SplitModal
          isOpen={isModelOpen}
          onClose={() => {
            setIsModelOpen(false);
          }}
        >
          <div>
            <h2 className="bg-white p-1">OVERVIEW</h2>
            <hr />
            <div className="flex justify-around">
              <div>
                <h3>This event cost the group: </h3>
                <h3>You have to pay: </h3>
                <h3>Amount cost per person:</h3>
              </div>
              <div>
                <p>8976757</p>
              </div>
            </div>
          </div>
        </SplitModal>
      </div>
    </>
  );
};

export default AddForm;
