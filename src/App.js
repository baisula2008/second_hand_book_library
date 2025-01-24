import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import BookDetail from './components/BookDetail';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "红酋长的赎金（入门级）",
      author: "未知",
      price: "3.5 USD",
      description:
        "Two thieves, Bill and Sam, plot to kidnap the son of an important citizen named Ebenezer Dorset, demand a ransom of $2,000, quickly collect the payoff, and be on their way. However, once they actually kidnap the boy and make their way to a hideout in the nearby hills, their plan quickly begins to unravel. Their young captive, a malevolent, redheaded brat who calls himself Red Chief (real name: Johnny Dorset), actually enjoys his stay with his kidnappers, and thinks he is on a camping trip.",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "把钱拿出来（入门级）",
      author: "未知",
      price: "3.5 USD",
      description:
        "Every day is the same. Nothing exciting ever happens to me, thinks Adam one boring Monday morning. But today is not the same. He helps a beautiful young woman because some men want to take her bag, and life gets exciting and very, very dangerous.",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "明星记者（入门级）",
      author: "未知",
      price: "3.5 USD",
      description:
        "Steve lives in Cado, and his father is editor of the Cado Star newspaper. But today, the Cado Star reporter is ill and Steve's father wants something interesting for this week's newspaper. 'Maybe you can find something for me,' he says to Steve. What can he find? What is new in Cado this week?",
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "谜图（入门级）（美绘版）（书虫·牛津英汉双语读物）",
      author: "未知",
      price: "3.5 USD",
      description:
        "One cold winter morning, a famous movie star and her teenage daughter are driving along a country road...A blue van is waiting for them. Tom is in the van, but he's not a kidnapper - he's an artist. He usually draws pictures for adventure stories. Now he's in a real life adventure.",
      image: "/images/4.jpg",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Navbar />
      <h1>Second-Hand Book Management System</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="book-list-container">
        {books
          .filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((book) => (
            <BookDetail key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
}

export default App;
