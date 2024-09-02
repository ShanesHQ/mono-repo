import express from "express"; 
const app = express();
app.use(express.json());

app.get("/", function(request, response) {
  response.json("Hello World!");
}); 

  app.listen(8080, function() {
    console.log("Server started on port 9000");
  });