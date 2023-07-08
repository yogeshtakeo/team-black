import Footer from "../components/Footer";

import NavBar from "../components/navi-bar";
import { useState } from "react";
import { blog_data } from "../data";
const timestamp = new Date().getTime();

const state = {
  date: new Date().toLocaleString(),
};

// import { Link } from "react-router-dom";

function BlogPage() {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");

  console.log(title);
  console.log(blog);
  interface IBlog {
    id: number;
    title: string;
    blog: string;
  }
  const [addBlogs, setAddBlogs] = useState<IBlog[]>([]);

  const HandleBlog = (title: string, blog: string) => {
    const newItem: IBlog = {
      id: timestamp,
      title: title,
      blog: blog,
    };

    setAddBlogs((prevList) => [...prevList, newItem]);
    setBlog("");
    setTitle("");
  };

  return (
    <>
      <div className="bg">
        <div className="bg-black/60 w-full">
          <div className="z-10 fixed top-0 left-0 right-0 z-index-100 w-full">
            <NavBar />
          </div>

          <div>
            <div className="pt-20">
              <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-slate-900">
                <form className="bg-slate-200/5 ml-10 p-10 w-full rounded-md backdrop-blur-sm">
                  <h1 className="flex justify-center text-slate-300 font-bold text-2xl text-slate-100 mb-8">
                    Create Blog
                  </h1>

                  <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                    <input
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      placeholder="Enter Title"
                    />
                  </div>

                  <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                    <textarea
                      value={blog}
                      onChange={(event) => setBlog(event.target.value)}
                      id="blogContent"
                      name="blogContent"
                      className="w-full pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                      placeholder="Your blog here"
                      value={blog}></textarea>
                  </div>

                  {/* <label className="items-center py-2 px-3 rounded-md mb-4 text-slate-300">Filter by :</label> */}

                  <div className="grid grid-cols-3 gap-4">
                    <select
                      value={filterCriteria}
                      onChange={(event) =>
                        setFilterCriteria(event.target.value)
                      }
                      id="filterCriteria"
                      name="filterCriteria"
                      className=" bg-slate-200/5 text-slate-300 items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                      <option className="bg-slate-700 text-slate-300 items-center">
                        Filter by{" "}
                      </option>
                      <option className="bg-slate-700 text-slate-300 items-center">
                        Author
                      </option>
                      <option className="bg-slate-700 text-slate-300 items-center">
                        Date
                      </option>
                      <option className="bg-slate-700 text-slate-300 items-center">
                        Title
                      </option>
                    </select>
                    <button
                      type="button"
                      className="block w-full  rounded-md text-slate-300 font-semibold mb-4 bg-slate-100/5 hover:bg-slate-100/10">
                      Preview
                    </button>

                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        HandleBlog(title, blog);
                      }}
                      className="block w-full rounded-md text-slate-300 font-semibold mb-4 bg-slate-100/5 hover:bg-slate-100/10">
                      Post
                    </button>
                  </div>
                </form>
              </div>

              <div>
                {addBlogs.map((eachblog) => {
                  return (
                    <>
                      <div
                        key={eachblog.id}
                        className="bg-slate-200/5 m-10 p-10 rounded-md backdrop-blur-sm">
                        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-slate-900">
                          <div className="flex items-center justify-between">
                            <span className="text-sm pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              {state.date}
                            </span>
                          </div>

                          <div className="mt-3">
                            <a className="text-2xl font-bold hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              {eachblog.title}
                            </a>

                            <p className="mt-2 pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              {eachblog.blog}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              Read more
                            </a>

                            <div>
                              <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center">
                                <img
                                  src="https://source.unsplash.com/50x50/?portrait"
                                  alt="avatar"
                                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-slate-500"
                                />

                                <span className="hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                                  Leroy Jenkins
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div>
                {blog_data.map((eachblog) => {
                  return (
                    <>
                      <div
                        key={eachblog.id}
                        className="bg-slate-400/5 m-10 p-10 rounded-md backdrop-blur-sm">
                        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-slate-900">
                          <div className="flex items-center justify-between">
                            <span className="text-sm pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              {eachblog.posted_date}
                            </span>
                          </div>

                          <div className="mt-3">
                            <a className="text-2xl font-bold hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              {eachblog.title}
                            </a>

                            <p className="mt-2 pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              {eachblog.blog}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                              Read more
                            </a>

                            <div>
                              <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center">
                                <img
                                  src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=10000"
                                  alt="avatar"
                                  className="w-10 h-10 mx-4 rounded-full"
                                />

                                <span className="hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                                  {eachblog.author}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              <div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
