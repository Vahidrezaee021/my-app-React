import "./Blog.css";
import BlogItem from "./BlogItem";
import blog1Image from "../../assets/images/post-1.jpg"
import blog2Image from "../../assets/images/post-2.jpg"
import blog3Image from "../../assets/images/post-3.jpg"


function Blog() {
  let blogs = [
    {
      blogTitle: "Post Title 1",
      blogInfo:
        "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      blogImage: blog1Image,
      blogAuthor: "Vahid Rezaei",
      blogTime: 5,
    },
    {
        blogTitle: "Post Title 2",
        blogInfo:
          "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
        blogImage: blog2Image,
        blogAuthor: "Asghar Farhadi",
        blogTime: 10,
      },
      {
        blogTitle: "Post Title 3",
        blogInfo:
          "Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
        blogImage: blog3Image,
        blogAuthor: "Akbar Abdi",
        blogTime: 12,
      },
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]} />
          <BlogItem {...blogs[1]} />
          <BlogItem {...blogs[2]} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
