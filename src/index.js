const app = require("./app");
const config = require("./config");
const router = require("./routes");

app.use("/api", router);

(async () => {
  try {
    if (config.MONGO_URI) {
      app.listen(config.PORT, () => {
        console.log(`server is running at ${config.PORT}`);
      });
    } else {
      console.error("MongoDB URL is not defined.");
    }
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})();
