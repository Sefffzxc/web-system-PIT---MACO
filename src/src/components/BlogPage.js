import React from 'react';

function BlogPage() {
  return (
    <div className="page-container">
      <h1>Blog</h1>
      <div className="content-section">
        <div className="blog-post">
          <h2>Latest Password Security Tips</h2>
          <p className="post-meta">Posted on March 10, 2025</p>
          <p>
            In today's digital landscape, having strong and unique passwords is more 
            important than ever. Here are some tips to keep your accounts secure...
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
        
        <div className="blog-post">
          <h2>The Future of Authentication</h2>
          <p className="post-meta">Posted on February 28, 2025</p>
          <p>
            Biometrics, passkeys, and other passwordless authentication methods are 
            becoming increasingly popular. Learn how these technologies work...
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
        
        <div className="blog-post">
          <h2>How to Protect Against Phishing Attacks</h2>
          <p className="post-meta">Posted on February 15, 2025</p>
          <p>
            Phishing remains one of the most common ways accounts get compromised. 
            Learn how to identify and avoid these deceptive attacks...
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;