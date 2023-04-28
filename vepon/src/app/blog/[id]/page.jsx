"use client";
import Blog from "@/components/pages/blog";
import { blogs } from "@/data";

export default function blog({ params, searchParams }) {
  return <Blog blog={blogs[Number(params.id)]} />;
}
