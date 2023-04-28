// "use client";
import Blogs from "@/components/pages/Blogs";
import axios from "axios";

const fetchBlogs = async () => {
  const response = await axios.get(`http://localhost:4000/api/blog/all`);
  return response;
};
export default async function page() {
  const response = await fetchBlogs();
  const blogs = response?.data?.blogs;
  return <Blogs blogs={blogs} />;
}
