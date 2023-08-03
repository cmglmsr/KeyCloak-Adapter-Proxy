import express from "express";
import axios from "axios";
import qs from "qs";

const router = express.Router();

const getDocuments = async (req, res) => {

    let data = qs.stringify({
        'destination': 'https://192.168.1.114/owa/',
        'flags': '4',
        'forcedownlevel': '0',
        'username': 'windc.net\\cemg',
        'password': '12tr734!',
        'passwordText': '',
        'isUtf8': '1'
    });

    let config = {
        method: 'post',
        withCredentials: true,
        maxBodyLength: Infinity,
        url: 'https://192.168.1.114/owa/auth.owa',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    axios.request(config)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    res.send("done!")
}

router.get("/", getDocuments);
export default router;