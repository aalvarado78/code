const axios = require("axios");

const HardwareDb = require("../model/model");

exports.homeRoutes = (req, res) => {
  //Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/hardware")
    .then(function (response) {
      res.render("index", { hardware: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_hardware = (req, res) => {
  res.render("add_hardware");
};

exports.update_hardware = async (req, res) => {
  let id = req.query.id;
  const hardware = await HardwareDb.findById(id);
  if (hardware) {
    res.render("update_hardware", {
      hardware: hardware,
    });
  } else {
    res.render("index");
  }
};
