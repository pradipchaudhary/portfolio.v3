"use client";
import React, { useState } from "react";

const BlogForm: React.FC = () => {
    const [content, setContent] = useState("");

    const handleEditorChange = (value) => {
        setContent(value); // Update state with editor content
    };

    return (
        <form className=" shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Create a New Blog
            </h2>

            {/* Title */}
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter the blog title"
                />
            </div>

            {/* Slug */}
            <div className="mb-4">
                <label
                    htmlFor="slug"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Slug
                </label>
                <input
                    type="text"
                    id="slug"
                    name="slug"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter a URL-friendly slug"
                />
            </div>

            {/* Excerpt */}
            <div className="mb-4">
                <label
                    htmlFor="excerpt"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Excerpt
                </label>
                <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Write a short excerpt for the blog"
                ></textarea>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="content"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Content
                </label>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4 ">
                {/* Date */}
                <div>
                    <label
                        htmlFor="date"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Read Time */}
                <div className="mb-4">
                    <label
                        htmlFor="readTime"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Read Time
                    </label>
                    <input
                        type="text"
                        id="readTime"
                        name="readTime"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="e.g., 5 min read"
                    />
                </div>
            </div>

            {/* Thumbnail */}
            <div className="mb-4">
                <label
                    htmlFor="thumbnail"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Thumbnail
                </label>
                <input
                    type="file"
                    id="thumbnail"
                    name="thumbnail"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter the URL of the thumbnail image"
                />
            </div>

            {/* Category */}
            <div className="mb-4">
                <label
                    htmlFor="category"
                    className="block text-gray-700 font-medium mb-2"
                >
                    Category
                </label>
                <select
                    id="category"
                    name="category"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select a category</option>
                    <option value="React">React</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="CSS">CSS</option>
                    <option value="Node.js">Node.js</option>
                </select>
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Create Blog
                </button>
            </div>
        </form>
    );
};

export default BlogForm;
