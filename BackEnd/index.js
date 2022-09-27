const express = require("express")
const app = express()
const port = 5000

const cors = require("cors")

app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:3000"],
  }),
)

const userRouter = require("./router/userRouter")
const filterRouter = require("./router/filterRouter")
const utilRouter = require("./router/util")

app.use("/user", userRouter)
app.use("/filter", filterRouter)
app.use("/util", utilRouter)

app.use(express.static("./static/uploads"))

app.listen(port, () => {
  console.log("Express Started")
})