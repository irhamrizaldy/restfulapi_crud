const {
  insertBootcamp,
  getBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require("../models/bootcamp-model");

// create
exports.createData = (req, res) => {
  const data = { ...req.body };
  const querySql = "INSERT INTO bootcamp SET ?";

  insertBootcamp(res, querySql, data);
};

// show
exports.readData = (req, res) => {
  const querySql = "SELECT * FROM bootcamp";

  getBootcamps(res, querySql);
};

// update
exports.updateData = (req, res) => {
  const data = { ...req.body };
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  const queryUpdate = "UPDATE bootcamp SET ? WHERE id = ?";

  updateBootcamp(res, querySearch, queryUpdate, req.params.id, data);
};

// delete
exports.deleteData = (req, res) => {
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  const queryDelete = "DELETE FROM bootcamp WHERE id = ?";

  deleteBootcamp(res, querySearch, queryDelete, req.params.id);
};
