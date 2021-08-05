import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //   const [blogs, setBlogs] = useState([
  //     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //     {
  //       title: "Web dev top tips",
  //       body: "lorem ipsum...",
  //       author: "mario",
  //       id: 3,
  //     },
  //   ]);

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id); // if id doesn't match, store it
  //     setBlogs(newBlogs); // set blogs to new value
  //   };

//   const [name, setName] = useState("mario");
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* <button onClick={() => setName("Luigi")}>Change Name</button> */}
      {/* <p>{name}</p> */}
      {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "mario";
        })}
        title="Marios Blogs"
      /> */}
    </div>
  );
};

export default Home;
