const express = require('express');
const router = express.Router();
const { getalltasks, gettaskbyid, editTask, deleteTask, posttask } = require('../controller/index');

router.get("/task", getalltasks);
router.get("/task/:id", gettaskbyid);
router.patch("/task/:id", editTask); 
router.delete("/task/:id", deleteTask);
router.post("/task", posttask);

module.exports = router;
