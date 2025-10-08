import express from "express";

const router = express.Router();


/*
    1. This is home route : get / => render main.ejs

    2. req res will access req.app and res.app before access routes

    3. working 
           
                1. req.app = reference to main Express app
                        2. res.render() uses app-level view configuration
                                 3. The router inherits all app settings and middleware

*/
router.get("/", (req, res) => {

  //test
  console.log("App settings:", {
    "view engine": req.app.get("view engine"),
    views: req.app.get("views"),
  });

  //render main.ejs

  res.render("main");

  
});

export default router;