import React from 'react';

function BlogLink() {
  return (
    <section id="blog-link" className="blog-link-section">
      <div className="blog-link-container">
        <h2>My Blog</h2>
        <p>Check out my latest thoughts, tutorials, and insights on my blog.</p>
        <a href="/blog" className="blog-button">
          Visit Blog
        </a>
      </div>
    </section>
  );
}

export default BlogLink; 