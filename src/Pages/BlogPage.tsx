import Footer from "../components/Footer";

import NavBar from "../components/Navbar";
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
    // setBlog("");
    // setTitle("");
  };

  return (
    <>
      <div className="bg">
        <div className="bg-black/60 w-full">
          <div>
            <NavBar />
          </div>

          <div>
            <div className="pt-16">
              <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-slate-900">
                <form className="bg-slate-900/30  p-10 w-full rounded-md backdrop-blur-sm">
                  <h1 className="flex justify-center text-slate-300 font-bold text-2xl text-slate-100 mb-8">
                    Create Blog
                  </h1>

                  <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                    <input
                      onChange={(event) => setTitle(event.target.value)}
                      className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Title"
                    />
                  </div>

                  <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                    <textarea
                      onChange={(event) => setBlog(event.target.value)}
                      id="blogContent"
                      name="blogContent"
                      className="w-full pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                      placeholder="Your blog here"></textarea>
                  </div>

                  <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                    <input
                      className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter keywords"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      data-te-toggle="modal"
                      data-te-target="#staticBackdrop"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="block w-full mt-4 py-2 rounded-md text-slate-300 mb-10 font-semibold mb-2 bg-slate-900/30 hover:bg-slate-100/10">
                      Preview
                    </button>

                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        HandleBlog(title, blog);
                      }}
                      className="block w-full mt-4 mr-4 py-2 rounded-md text-slate-300 mb-10 font-semibold mb-2 bg-slate-900/30 hover:bg-slate-100/10">
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
                        className="bg-slate-900/30 m-10 p-10 rounded-md backdrop-blur-sm">
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
                        className="bg-slate-900/30 m-10 p-10 rounded-md backdrop-blur-sm">
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
                                  src="https://source.unsplash.com/50x50/?portrait"
                                  alt="avatar"
                                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-slate-500"
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
