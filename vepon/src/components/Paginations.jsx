"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Card from "./BlogCard";
import { blogs as items } from "@/data";
import BlogCard from "./BlogCard";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import axios from "axios";

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
  return (
    <div className="gap-[2rem] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[90%] mx-auto grid items-center  sm:grid-cols-2 md:grid-cols:3 mt-[2rem] ">
      {currentItems &&
        currentItems?.map((item) => (
          <BlogCard key={item._id} blog={item} aspect="square" />
        ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  // const [items, setItems] = useState([]);

  console.log(items);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        previousLabel={<GrLinkPrevious className="text-gray-100" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        nextLabel={<GrLinkNext className="text-gray-100" />}
        renderOnZeroPageCount={null}
        pageLinkClassName="text-[1rem]"
        pageClassName="flex items-center justify-center w-[40px] h-[40px] text-[1.2rem] bg-gray-200 rounded-full "
        activeClassName="bg-blue-700 text-gray-100 rounded-full  "
        activeLinkClassName="text-gray-100 bg-blue-700 w-full h-full rounded-full flex justify-center items-center"
        className="flex items-center justify-center my-[3rem] gap-[0.4rem] "
        nextClassName="ml-[2rem]"
        previousClassName="mr-[2rem]"
        nextLinkClassName="text-[1.5rem]"
        previousLinkClassName="text-[1.5rem]"
        breakClassName="text-red-400"
      />
    </>
  );
}
