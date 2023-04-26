const {
  catchAsyncErrorsMiddleware: catchAsyncErrors,
} = require("../middlewares");
const { ApiFeatures, sendResponse, ErrorHandler } = require("../utils");

const { Blog } = require("../models");

// REGISTER BLOG
exports.registerBlog = catchAsyncErrors(async (req, res, next) => {
  const { title, text } = req.body;
  const blog = new Blog({ title, text, author: req.user._id });

  const savedBlog = await blog.save();
  if (!savedBlog) {
    return sendResponse(res, 400, {
      success: false,
      message: "unable to register",
    });
  }
  sendResponse(res, 200, {
    success: true,
    message: "blog is registered",
    blog: savedBlog,
  });
});

// UPDATE bank

// exports.updateBank = catchAsyncErrors(async (req, res, next) => {
//   let blog = await Blog.findByIdAndUpdate(req.params.bankId, {
//     $set: req.body,
//     new: true,
//     runValidators: true,
//   });

//   if (!bank) {
//     sendResponse(404, res, { success: false, message: "bank not found " });
//   }
//   await bank.save();

//   sendResponse(res, 200, {
//     success: true,
//     message: "bank  updated successfully",
//   });
// });

// DELETE bank
// exports.deleteBank = catchAsyncErrors(async (req, res, next) => {
//   const blog = await Bank.findById(req.params.bankId);

//   if (!bank) {
//     sendResponse(404, res, { success: false, message: "bank not found " });
//     return next(
//       new ErrorHandler(`bank does not exist with id: ${req.params.bankId}`)
//     );
//   }
//   const removedBank = await bank.remove();
//   sendResponse(res, 200, {
//     removedBank,
//     success: true,
//     message: "bank deleted successfully",
//   });
// });

// GET ALL BLOGS

exports.getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = Number(req.headers["rows-per-page"]);

  let apiFeature1 = new ApiFeatures(Blog.find(), req.query).search();
  let allBlogs = await apiFeature1.query;
  const totalBlogs = allBlogs.length;

  const apiFeature2 = new ApiFeatures(Blog.find().populate("author"), req.query)
    .search()
    .pagination(resultPerPage);
  let blogs = await apiFeature2.query;
  const isNext =
    parseInt(req.query.page) * resultPerPage < totalBlogs &&
    totalBlogs > resultPerPage;
  sendResponse(res, 200, {
    success: true,
    blogs,
    next: isNext,
    prev: apiFeature2.prev,
    skip: apiFeature2.skip,
    count: totalBlogs,
  });
});
// GET SINGLE bank

exports.getSingleBlog = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.blogId).populate("author");
  blog.populated("author");
  console.log(blog);
  if (!blog) {
    sendResponse(404, res, { success: false, message: "blog not found " });

    return next(new ErrorHandler("blog not found", 400));
  }

  sendResponse(res, 200, { success: true, blog });
});
