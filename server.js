import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//handle unhandled promise rejections
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
