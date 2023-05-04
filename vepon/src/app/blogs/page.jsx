// "use client";
import Blogs from "@/components/pages/Blogs";
import axios from "axios";

// FETCH BLOGS
const fetchBlogs = async () => {
  const response = await axios.get(`http://localhost:4000/api/blog/all`);
  return response;
};

export default async function page() {
  // FETCH BLOGS API CALL
  const response = await fetchBlogs();
  const blogs = response?.data?.blogs;

  // BLOGS PAGE COMPONENT
  return <Blogs blogs={blogs} />;
}
