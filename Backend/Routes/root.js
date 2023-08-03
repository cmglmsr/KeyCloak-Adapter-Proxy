import express from "express";
import axios from "axios";

const router = express.Router();

const getDocuments = async (req, res) => {

    try {
        res.status(200).send();
    }
    catch(err) {
        res.status(500).send()
    }
}

router.get("/", getDocuments);
export default router;