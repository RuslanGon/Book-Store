import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteBook = async () => {
      try {
        const response = await axios.delete(
          `https://book-store-ma07.onrender.com/book/book/${id}`
          // `http://localhost:3001/book/book/${id}`
        );
        console.log(response.data);
          navigate("/books");
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };
    deleteBook();
  }, [id, navigate]);
};

export default DeleteBook;
