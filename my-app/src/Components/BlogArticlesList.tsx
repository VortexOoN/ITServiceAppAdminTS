import React from 'react';
import { FaPen, FaTrash, FaSave } from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";

enum Status {
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED"
}

enum Category {
  TECH = "Tech",
  LIFESTYLE = "Lifestyle",
  BUSINESS = "Business"
}

type BlogArticle = {
  id: number; 
  date: string;
  status: Status;
  title: string;
  featured: boolean;
  category: Category;
};

const BlogArticlesList  = () => {
  const articles: BlogArticle[] = [
    {
      id: 1,
      date: "2024-05-25",
      status: Status.PUBLISHED,
      title: "How to build PC ?",
      featured: true,
      category: Category.TECH
    },
    {
      id: 2,
      date: "2024-05-24",
      status: Status.UNPUBLISHED,
      title: "Second Article",
      featured: false,
      category: Category.LIFESTYLE
    },
    {
      id: 3,
      date: "2024-05-20",
      status: Status.UNPUBLISHED,
      title: "Boosting Your Productivity: Tips and Tricks",
      featured: false,
      category: Category.BUSINESS
    },
    {
      id: 4,
      date: "2024-05-19",
      status: Status.PUBLISHED,
      title: "Introduction to Quantum Computing",
      featured: true,
      category: Category.TECH
    },
    {
      id: 5,
      date: "2024-05-18",
      status: Status.UNPUBLISHED,
      title: "The Art of Mindfulness: Finding Inner Peace",
      featured: false,
      category: Category.LIFESTYLE
    },
    {
      id: 6,
      date: "2024-05-18",
      status: Status.UNPUBLISHED,
      title: "The Art of Mindfulness: Finding Inner Peace",
      featured: false,
      category: Category.LIFESTYLE
    },
  ];

  return (
    <div className="container-fluid px-4 py-2 border rounded mt-2 mb-2 text-start">
      <div className='text-start'>
        <h2 className="fs-4 text-start">Blog Articles</h2>
        <button className='btn buttton bg-dark text-white mt-2 mb-2'><FiPlus />Add article</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Title</th>
            <th>Featured</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}> 
              <td>{article.date}</td>
              <td>{article.status}</td>
              <td>{article.title}</td>
              <td>
                <input type="checkbox" checked={article.featured} readOnly />
              </td>
              <td>{article.category}</td>
              <td>
                <button className='btn button p-1 border rounded me-2 mb-2'>Edit<span className="me-2 ms-2"><FaPen /></span></button>
                <button className='btn button p-1 border rounded'><span className='me-2'>Delete</span> <FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogArticlesList;
