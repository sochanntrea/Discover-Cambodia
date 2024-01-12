import React from 'react';

const BlogCard = ({ title, content, author, date, image }) => {
  const trimmedContent = content.length > 150 ? content.slice(0, 150) + '...' : content;
  return (
    <div className="bg-white m-2 shadow-md rounded-md flex hover:bg-gray-100 hover:scale-x-125 hover:scale-y-110 ml-4 mr-4">
      {image && (
        <img
          className="mr-4 object-cover w-48 h-56 rounded-md"
          src={image}
          alt={title}
        />
      )}
      <div className='p-2'>
        <h2 className="text-xl font-bold text-left">{title}</h2>
        <p className="text-gray-700 text-left">{trimmedContent}</p>
        <div className="flex justify-between mt-4">
          <p className="text-sm text-gray-500">{`By ${author} on ${date}`}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;