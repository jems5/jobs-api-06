const express = require("express");
const router = express.Router();

const { getAllJob, getJob, createJob, updateJob, deleteJob } = require("../controllers/jobs");

router.route("/").get(getAllJob).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
