import React from 'react';
import BlogCard from './Places';
import ActivityCard from './activity';
import place from '../json/places.json';
const BodySection = () => {
    const last7Blogs = place.slice(-3);

  return (
    <div>
      <div>
        <h3 className='p-4 text-center text-2xl font-semibold text-gray-700 underline hover:text-gray-900'>Explore Various Places</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center mx-8 my-2 mb-6">
          {last7Blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
      <div>
        <h3 className='p-4 text-center text-2xl font-semibold text-gray-700 underline hover:text-gray-900'>Explore More Activity</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center mx-8 my-2 mb-6">
          {last7Blogs.map((blog) => (
            <ActivityCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
      <div>
        <h3 className='p-4 text-center text-2xl font-semibold text-gray-700 underline hover:text-gray-900'>Nature and Culture</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center mx-8 my-2 mb-6">
          {last7Blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
      <div>
        <h3 className='p-4 text-center text-2xl font-semibold text-gray-700 underline hover:text-gray-900'>Souvenir and Handmade</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-center mx-8 my-2 mb-6">
          {last7Blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodySection;
