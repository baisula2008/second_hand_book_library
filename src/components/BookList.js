import React, { useState } from 'react'; // 导入 useState
import BookDetail from './BookDetail';

// 假设你有四本书，图片存在 public/images 目录
const BookList = () => {
  const [books, setBooks] = useState([ // 使用 useState 在组件内部初始化书籍数据
    {
      id: 1,
      title: "红酋长的赎金（入门级）",
      author: "未知",
      price: "3.5 USD",
      description: "Two thieves, Bill and Sam, plot to kidnap the son of an important citizen named Ebenezer Dorset, demand a ransom of $2,000, quickly collect the payoff, and be on their way. However, once they actually kidnap the boy and make their way to a hideout in the nearby hills, their plan quickly begins to unravel. Their young captive, a malevolent, redheaded brat who calls himself Red Chief (real name: Johnny Dorset), actually enjoys his stay with his kidnappers, and thinks he is on a camping trip.",
      image: "/images/1.jpg", // 图片路径在 public/images 文件夹中
    },
    {
      id: 2,
      title: "把钱拿出来（入门级）",
      author: "未知",
      price: "3.5 USD",
      description: "Every day is the same. Nothing exciting ever happens to me, thinks Adam one boring Monday morning. But today is not the same. He helps a beautiful young woman because some men want to take her bag, and life gets exciting and very, very dangerous.",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "HTML & CSS: The Complete Guide",
      author: "Chris Brown",
      price: "8 USD",
      description: "This book provides a detailed guide to mastering HTML5 and CSS3 with examples.",
      image: "/images/3.jpg",
    },
  ]);

  return (
    <div className="book-list">
      {/* 循环展示每本书籍 */}
      {books.map((book) => ( // 删除了 index 作为 key，改用 book.id
        <BookDetail key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
