import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const data = useLoaderData()

    return (
        <div>
           <div className="card max-w-5xl  card-sm  my-12 rounded-2xl space-y-4 mx-auto " >
            {
                data.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;