const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParse = require("body-parser");
//thiết lập truy cập cho các trang web khác
//cài đặt cors
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParse.json());

app.listen(4000);
