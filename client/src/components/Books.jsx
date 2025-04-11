import axios from "axios"
import { useEffect, useState } from "react"

const Books = () => {

const [books, setBooks] = useState([])

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:3001/books')
      setBooks(res.data.books)
    } catch (error) {
      console.error("Error fetching books:", error)
    }
  }

  fetchBooks()
}, [])

  return (
    <div>Books</div>
  )
}

export default Books