import Image from "next/image";
import Link from "next/link";
import { person1 } from "../assets/images/people/index";
// import { parseISO, format } from "date-fns";
import { MdNoPhotography } from "react-icons/md";
import { blogs } from "@/data";
export default function BlogCard({ blog, aspect, preloadImage }) {
  blog = { ...blogs[0], ...blog };
  const imageProps = blog?.mainImage ? blog.mainImage : null;
  const AuthorimageProps = person1;
  return (
    <Link href={`/blog/${blog?.id}`}>
      <div
        className="bg-white gap-0 items-start hover:scale-105 cursor-pointer w-full
lg:min-h-[310px]
 px-[1rem]
 py-[1rem]
 rounded-lg
 flex
 flex-col
 justify-center
 shadow-sm
 transition-all
 hover:shadow-md">
        <div className="w-[100%]  rounded-md">
          <Link href={`/blog/${blog._id}`}>
            {imageProps ? (
              <Image src={imageProps} />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <MdNoPhotography />
              </span>
            )}
          </Link>
        </div>
        <div className="flex gap-0  items-start flex-col flex-wrap">
          {blog.categories?.length &&
            blog.categories.slice(0).map((category, index) => (
              <Link href="#" key={index}>
                <span
                  className={`inline-block mt-5 text-xs font-medium tracking-wider uppercase py-1 px-2 text-gray-500 rounded-sm bg-${
                    category.color ? `[${category.color}]` : "green-500"
                  } bg-green-300`}>
                  {category.title}
                </span>
              </Link>
            ))}
        </div>
        <h2 className="text-gray-600 text-sm text-start font-semibold tracking-normal text-brand-primary dark:">
          <Link href={`/blog/${blog._id}`}>
            <span
              className=" text-gray-600 bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {blog.title}
            </span>
          </Link>
        </h2>

        <div className="hidden">
          {blog.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/blog/${blog._id}`}>{blog.excerpt}</Link>
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {AuthorimageProps && (
                <Image
                  src={AuthorimageProps.src}
                  blurDataURL={AuthorimageProps.blurDataURL}
                  loader={AuthorimageProps.loader}
                  objectFit="cover"
                  layout="fill"
                  alt={blog?.author?.name}
                  placeholder="blur"
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-sm">{blog.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={blog?.publishedAt || blog.createdAt}>
            {blog.publishedAt || blog.createdAt}
          </time>
        </div>
      </div>
    </Link>
  );
}
