const express = require("express");
const { getProd, getProdById, deleteProd, postProd } = require("../controller/controllerProduct");

const router = express.Router();


router.get("/",getProd)
router.get("/:id",getProdById)
router.delete("/:id",deleteProd)
router.post("/",postProd)

module.exports= router