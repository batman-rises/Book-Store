import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setloading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((err) => {
        setloading(false);
        alert("an error happened, pls check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          className="bg-red-600 p-4 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete It
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
