require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const Blog = require("./models/blog");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Blog CRUD Backend is running!");
});
app.post("/blogs", async (req, res) => {
    try {
        const { title, description, author } = req.body;

        const newBlog = new Blog({
            title,
            description,
            author
        });

        const savedBlog = await newBlog.save();

        res.status(201).json({
            message: "Blog created successfully",
            blog: savedBlog
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to create blog",
            error: error.message
        });
    }
});
app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json({
            count: blogs.length,
            blogs: blogs
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch blogs",
            error: error.message
        });
    }
});
app.get("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Check whether the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid blog ID"
            });
        }

        // Find the blog by ID
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            blog: blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch blog",
            error: error.message
        });
    }
});
app.delete("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Check whether the ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid blog ID"
            });
        }

        // Delete the blog
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog deleted successfully",
            blog: deletedBlog
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete blog",
            error: error.message
        });
    }
});

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer();