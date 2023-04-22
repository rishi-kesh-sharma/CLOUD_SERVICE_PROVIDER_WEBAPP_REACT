const Router = require("express").Router();

const {
  blogController: {
    getAllBlogs,
    getSingleBlog,
    // updateBlog,
    // deleteBlog,
    registerBlog,
  },
} = require("../controllers");

const {
  authMiddleWare: { authorizeRoles, isAuthenticatedUser, isAuthorizedUser },
} = require("../middlewares");

// for all users
Router.route("/all").get(getAllBlogs);

// for admin
Router.route("/admin/register").post(registerBlog);
// Router.route("/admin/register").post(
//   isAuthenticatedUser,
//   authorizeRoles("superadmin admin"),
//   registerBlog
// );
Router.route("/:blogId").get(getSingleBlog);
// Router.route("/admin/:blogId").put(
//   isAuthenticatedUser,
//   authorizeRoles("superadmin"),
//   updateBlog
// );
// Router.route("/admin/:blogId").delete(
//   isAuthenticatedUser,
//   authorizeRoles("superadmin"),
//   deleteBlog
// );

// // for authorized Blog
// Router.route("/me/:userId").get(
//   isAuthenticatedUser,
//   isAuthorizedUser,
//   getSingleBlog
// );
// Router.route("/me/:userId").put(
//   isAuthenticatedUser,
//   isAuthorizedUser,
//   updateBlog
// );
module.exports = Router;
