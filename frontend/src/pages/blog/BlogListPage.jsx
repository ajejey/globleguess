import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../blogData'; // Path to blogData.js is ../../blogData.js from frontend/src/pages/blog/

const BlogListPage = () => {
  const posts = getAllPosts(); // getAllPosts already sorts by date

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight tracking-tight">
          The Globle Guess Blog
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Dive into insights, game updates, geography facts, and fun explorations from the world of Globle Guess and online educational gaming.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">
          No blog posts have been published yet. Please check back soon for exciting content!
        </p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-blue-200 hover:scale-105 group"
            >
              {/* Optional: Add image if available post.imageUrl
              {post.imageUrl && (
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </Link>
              )}
              */}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-700 transition-colors duration-300 ease-in-out"
                    aria-label={`Read more about ${post.title}`}
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="text-gray-500 text-sm mb-4">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span>By: {post.author}</span>
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed flex-grow line-clamp-4"> {/* line-clamp-4 for a bit more summary */}
                  {post.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 group-hover:text-blue-700"
                    aria-label={`Continue reading ${post.title}`}
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogListPage;
