import React, { ChangeEvent, useState } from "react";
import { blog_data } from "../data";
import { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/navi-bar";

interface Content {
  id: string;
  title: string;
  author: string;
  blog: string;
}

const Searchpage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<Content[]>([]);

  const data = blog_data;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filter = data.filter((content) =>
      content.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filter);
  };

  return (
    <>
      <div className="bg">
        <div className="h-full bg-black/60">
          <div className=" z-10 fixed top-0 left-0 right-0 z-index-100 w-full  ">
            <NavBar />
          </div>
          <div className="p-24">
            <main className="m-4 z-1 w-full h-screen">
              <div className="flex justify-center items-center bg-slate-900/30  rounded-md backdrop-blur-sm ">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search..."
                  className="flex items-center border-2  border-orange-800 py-2 px-3 rounded-md w-1/3 m-24"
                />
              </div>
              <div className="bg-slate-900/30 m-5 p-10 rounded-md backdrop-blur-sm">
                {filter.map((content: Content, index) => (
                  <div
                    key={index}
                    className="m-8 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-slate-900"
                  >
                    <div className="mt-3">
                      <a className="text-2xl font-bold hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                        {content.title}
                      </a>
                      <p className="mt-2 pl-2 outline-none border-none bg-slate-100/0 text-slate-300">
                        {" "}
                        {content.blog}
                      </p>
                    </div>
                    <span className="flex justify-right hover:underline pl-2 outline-none border-none bg-slate-100/0 text-slate-300 ">
                      {content.author}
                    </span>
                  </div>
                ))}
              </div>
            </main>{" "}
          </div>

          <div className="bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Searchpage;
