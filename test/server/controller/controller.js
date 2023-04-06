var Hardwaredb = require("../model/model");

//create and save a new hardware
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  // new hardware
  console.log("req body", req.body);
  const hardware = new Hardwaredb({
    hardwareName: req.body.hardwareName,
    vendor: req.body.vendor,
    performance: req.body.performance,
    status: req.body.status,
    location: req.body.location,
    date: req.body.date,
  });

  //sve hard in db

  hardware
    .save(hardware)
    .then((data) => {
      //res.send(data)
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred while creating operation ",
      });
    });
};

//retrieve and return all users/ retrive and return a single hardware
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Hardwaredb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found hardware with id" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving hardware with id" + id });
      });
  } else {
    Hardwaredb.find()
      .then((hardwareName) => {
        res.send(hardwareName);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

// update a new identied user by user id

exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data  to update can not be empty" });
  }

  console.log(req.body, "req");

  const id = req.params.id;
  Hardwaredb.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot Update user with ${id}. Maybe hardware not found!",
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update Hardware information" });
    });
};

//delete a hardware witha user specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Hardwaredb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "Cannot Delete with id ${id}. Maybe id is wrong" });
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Hardware with id=" + id,
      });
    });
};
