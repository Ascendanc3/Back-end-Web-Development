const router = require("express").Router();
require("./mongoose");
const User = require("./User");
const users = require("./User")


// ------------------- MONGOOSE ------------------------------

//Menampilkan semua users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ status: "success", messsage: "list users", data: users });
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
});

//Menampilkan single users
router.get("/users/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (users) {
      res.send({ status: "success", messsage: "single users", data: users });
    } else {
      res.send({ status: "warning", message: "user tidak ditemukan" });
    }
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
});

//Menambah user
router.post("/users", async (req, res) => {
  try {
    const result = await User.create({
      name: req.body.name,
      age: req.body.age,
      status: req.body.status,
    });

    res.send({
      status: typeof result === "object" ? "success" : "warning",
      message:
        typeof result === "object"
          ? "Insert 1 data"
          : "Data could not be inserted.",
      result: typeof result === "object" ? result : null,
    });
  } catch (e) {
    res.send({
      status: "error",
      message: e.message,
    });
  }
});

//Mengupdate user
router.put("/users:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = id.split("");
    id.shift();
    id = id.join("");

    const result = await User.updateOne(
      { _id: id },
      {
        name: req.body.name,
        age: req.body.age,
        status: req.body.status,
      }
    );

    res.send({
      status: typeof result === "object" ? "success" : "warning",
      message:
        typeof result === "object"
          ? "Updated 1 data"
          : "Data could not be updated.",
      result: typeof result === "object" ? result : null,
    });
  } catch (e) {
    res.send({
      status: "error",
      message: e.message,
    });
  }
});

//Menghapus user
router.delete("/users:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = id.split("");
    id.shift();
    id = id.join("");

    const result = await User.deleteOne({ _id: id });

    res.send({
      status: typeof result === "object" ? "success" : "warning",
      message:
        typeof result === "object"
          ? "GET user using ID (found 1 data)"
          : "Data not found",
      result: typeof result === "object" ? result : null,
    });
  } catch (e) {
    res.send({
      status: "error",
      message: e.message,
    });
  }
});

module.exports = router;
