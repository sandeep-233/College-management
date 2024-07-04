const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");

const adminRoutes = require("./routes/Admin");
const facultyRoutes = require("./routes/Faculty");
const studentRoutes = require("./routes/Student")

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
// const Razorpay = require("razorpay");
// const { current } = require("@reduxjs/toolkit");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		// origin:"http://localhost:3000",
		origin:"https://college-management-pi.vercel.app/",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:'/tmp/',
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/faculty", facultyRoutes);
app.use("/api/v1/students", studentRoutes);
// app.use("/api/v1/payment", paymentRoutes);

// code for razorpay payment integration 
// app.post('/collegeFee', async (req, res) => {
// 	const razorpay = new Razorpay({
// 		key_id: process.env.RAZORPAY_KEY,
// 		key_secret: process.env.RAZORPAY_SECRET
// 	})

// 	const options = {
// 		amount: req.body.amount,
// 		currency: req.body.currency,
// 		receipt: "receipt#1",
// 		payment_capture: 1
// 	}

// 	try {
// 		const response = await razorpay.orders.create(options)

// 		res.status(200).json({
// 			order_id: response.id,
// 			currency: response.currency,
// 			amount: response.amount
// 		})
// 	} catch(error) {
// 		res.status(500).send("Internal server error")
// 	}
// })

// app.get("/payment/:paymentId", async(req, res) => {
// 	const {paymentId} = req.params;

// 	const razorpay = new Razorpay({
// 		key_id: process.env.RAZORPAY_KEY,
// 		key_secret: process.env.RAZORPAY_SECRET
// 	})

// 	try{
// 		const payment = await razorpay.payments.fetch(paymentId)

// 		if(!payment) {
// 			return res.status(500).json("Error at razorpay loading")
// 		}

// 		res.json({
// 			status: payment.status,
// 			method: payment.method,
// 			amount: payment.amount,
// 			currency: payment.currency
// 		})
// 	} catch(error) {
// 		res.status(500).json("faild to fetch")
// 	}
// })

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

