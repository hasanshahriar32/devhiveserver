const express = require("express");
const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
  singleUser,
} = require("../Controllers/userController");
const router = express.Router();

// define the home page route
//

router.route("/").post(createUser).get(getUser);

router.get("/:id", singleUser);

// router.post('/', createUser)

router.delete("/", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
