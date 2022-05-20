const conn = require("../config/database");
const { responseData, responseMessage } = require("../utils/response-handler");

exports.insertBootcamp = (response, statement, data) => {
  conn.query(statement, data, (err, rows, field) => {
    if (err) {
      return response
        .status(500)
        .json({ message: "Error insert data!", error: err });
    }
    responseMessage(response, 201, "Success insert data!");
  });
};

exports.getBootcamps = (response, statement) => {
  conn.query(statement, (err, rows, field) => {
    if (err) {
      return response
        .status(500)
        .json({ message: "Error occured", error: err });
    }
    responseData(response, 200, rows);
  });
};

exports.updateBootcamp = (
  response,
  searchStatement,
  updateStatement,
  id,
  data
) => {
  conn.query(searchStatement, id, (err, rows, field) => {
    if (err) {
      return response
        .status(500)
        .json({ message: "Error occured", error: err });
    }
    if (rows.length) {
      conn.query(updateStatement, [data, id], (err, rows, field) => {
        if (err) {
          return response
            .status(500)
            .json({ message: "Error occured", error: err });
        }
        responseMessage(response, 200, "Success update data!");
      });
    } else {
      return response
        .status(404)
        .json({ message: "Data not found!", success: false });
    }
  });
};

exports.deleteBootcamp = (response, searchStatement, deleteStatement, id) => {
  conn.query(searchStatement, id, (err, rows, field) => {
    if (err) {
      return response
        .status(500)
        .json({ message: "Error occured", error: err });
    }
    if (rows.length) {
      conn.query(deleteStatement, id, (err, rows, field) => {
        if (err) {
          return response
            .status(500)
            .json({ message: "Error occured", error: err });
        }
        responseMessage(response, 200, "Success delete data!");
      });
    } else {
      return response
        .status(404)
        .json({ message: "Data not found!", success: false });
    }
  });
};
