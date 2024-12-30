const Task = require('../model/task');

// Get all tasks
async function getalltasks(req, res) {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get task by ID
async function gettaskbyid(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task Not Found" });
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Edit task
async function editTask(req, res) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Task Not Found" });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete task
async function deleteTask(req, res) {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task Not Found" });
        }
        res.status(200).json({ message: "Task Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Add a new task
async function posttask(req, res) {
    try {
        const { task, category, priority, id } = req.body;
        if (!task || !category || !priority || !id) {
            return res.status(400).json({ message: "Incomplete task details" });
        }
        const newTask = new Task({
            task,
            category,
            priority,
            id
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getalltasks,
    gettaskbyid,
    editTask,
    deleteTask,
    posttask
};
