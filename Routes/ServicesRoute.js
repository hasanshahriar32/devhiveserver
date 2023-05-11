const express = require("express");
const {
  createService,
  getService,
  updateService,
  deleteService,
  getSingleService,
  queryService,
  getDeveloperService,
  getCategoryService,
  queryGist,
} = require("../Controllers/serviceController");

const router = express.Router();

// define the home page route

router.post("/", createService);

router.get("/", getService);

router.get("/:query", queryService);
router.get("/slug", queryGist);

router.get("/single/:id", getSingleService);
router.get("/developer/:id", getDeveloperService);
router.get("/category/:id", getCategoryService);

router.delete("/:id", deleteService);

router.patch("/:id", updateService);

module.exports = router;
