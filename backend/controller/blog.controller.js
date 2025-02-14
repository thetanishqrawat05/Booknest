import Blog from '../model/blog.model.js';

// Create a new blog post
export const createBlogPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Check if all required fields are present
    if (!title || !content || !author) {
      return res.status(400).json({ error: 'Title, content, and author are required.' });
    }

    const blogPost = new Blog({ title, content, author });
    await blogPost.save();

    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};

// Get all blog posts
export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find().populate('author', 'fullname');
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
};

// Update a blog post
export const updateBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const blogPost = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    res.status(200).json(blogPost);
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
};

// Delete a blog post
export const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
};
