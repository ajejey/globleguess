import React, { lazy, Suspense, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Added Link for error messages
import { getPostBySlug } from '../../blogData'; // Path to blogData.js
import BlogPostLayout from './BlogPostLayout'; // Path to BlogPostLayout.jsx

// Helper to map component names to dynamic imports
// Ensure component names in blogData.js exactly match file names (without .jsx)
// These files will be created in a subsequent step.
const componentRegistry = {
  BlogPost1: lazy(() => import('./posts/BlogPost1.jsx')),
  BlogPost2: lazy(() => import('./posts/BlogPost2.jsx')),
  BlogPost3: lazy(() => import('./posts/BlogPost3.jsx')),
  BlogPost4: lazy(() => import('./posts/BlogPost4.jsx')),
  BlogPost5: lazy(() => import('./posts/BlogPost5.jsx')),
  BlogPost6: lazy(() => import('./posts/BlogPost6.jsx')),
  BlogPost7: lazy(() => import('./posts/BlogPost7.jsx')),
  BlogPost8: lazy(() => import('./posts/BlogPost8.jsx')),
  BlogPost9: lazy(() => import('./posts/BlogPost9.jsx')),
  BlogPost10: lazy(() => import('./posts/BlogPost10.jsx')),
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // useNavigate can be used for redirection if needed
  const post = getPostBySlug(slug);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  // Optional: Update document title. For full SEO, a library like React Helmet is better.
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Globle Guess Blog`;
    } else {
      document.title = 'Post Not Found - Globle Guess Blog';
    }
    // Cleanup function to reset title if component unmounts, optional
    // return () => { document.title = 'Globle Guess Game'; };
  }, [post]);

  if (!post) {
    // If post is not found by slug, render a simple "not found" message
    // A more robust solution might involve a dedicated 404 component and route
    return (
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Post Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">
          Sorry, we couldn't find the blog post you were looking for. It might have been moved or deleted.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          &larr; Back to All Blog Posts
        </Link>
      </div>
    );
  }

  const PostContentComponent = componentRegistry[post.componentName];

  if (!PostContentComponent) {
    // Handle case where componentName from blogData.js is invalid or not in registry
    // This indicates a configuration error.
    return (
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error Loading Post</h1>
        <p className="text-lg text-gray-700 mb-8">
          There was an issue loading the content for this post. Please try again later.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          &larr; Back to All Blog Posts
        </Link>
      </div>
    );
  }

  return (
    <BlogPostLayout post={post}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            <p className="ml-4 text-xl text-gray-700">Loading content...</p>
          </div>
        }
      >
        <PostContentComponent />
      </Suspense>
    </BlogPostLayout>
  );
};

export default BlogPostPage;
