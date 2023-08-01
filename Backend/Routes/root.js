import express from "express";

const router = express.Router();

let data = {
    "SSB": [
        "SSB license 1",
        "SSB license 2",
        "SSB license 3",
        "SSB license 4",
    ],
    "TPAO": [
        "TPAO license 1",
        "TPAO license 2",
        "TPAO license 3",
        "TPAO license 4",
    ],
};

const getDocuments = async (req, res) => {
    try {
        res.status(200).send(data["SSB"]);
    }
    catch(err) {
        res.status(500).send("[-] Error:" + err)
    }
}

router.get("/", getDocuments);
export default router;