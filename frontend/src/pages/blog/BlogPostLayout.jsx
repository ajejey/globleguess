import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostLayout = ({ post, children }) => {
  if (!post) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-700">Loading post details or post not found...</p>
        <div className="mt-4">
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            &larr; Back to All Posts
          </Link>
        </div>
      </div>
    );
  }

  const { title, date, author, strategicLink, summary } = post; // Added summary for potential use in meta tags if needed later by a Helmet-like solution

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Optional: Add a header image here if your posts have them
        {post.imageUrl && (
          <img src={post.imageUrl} alt={title} className="w-full h-64 object-cover" />
        )}
        */}
        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
            {title}
          </h1>
          <div className="text-gray-500 text-base mb-8 border-b pb-4">
            <span>Published on: {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>By: {author}</span>
          </div>

          {/* Content from specific blog post component will be rendered here */}
          {/* Tailwind Typography plugin classes: prose, prose-lg, prose-xl etc. */}
          {/* Added prose-indigo for link colors that match a blue theme */}
          <div className="prose prose-lg lg:prose-xl max-w-none text-gray-800 prose-indigo">
            {children}
          </div>

          {strategicLink && (
            <div className="mt-12 p-5 border-2 border-blue-600 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                {strategicLink.name || 'Take a Look!'}
              </h3>
              <p className="text-gray-700 mb-3">{strategicLink.description || 'Explore this related resource we think you\'ll find interesting.'}</p>
              <a
                href={strategicLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md text-lg break-all transition duration-300 ease-in-out transform hover:scale-105"
              >
                {strategicLink.text || `Visit ${strategicLink.name || 'Resource'}`}
              </a>
            </div>
          )}
        </div>
      </article>

      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
        >
          &larr; Back to All Posts
        </Link>
      </div>
    </div>
  );
};

export default BlogPostLayout;
