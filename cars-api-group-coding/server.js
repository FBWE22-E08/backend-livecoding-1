import express from "express";

//* Initial Setup
const app = express();
const port = 5001;
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cars = [
  { id: 1, name: "Volvo" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
];

//* Default Route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to our port ${port} 🐱</h1>`);
});

//* GET: show all the cars
app.get("/api/cars", (req, res) => {
  res.status(200).json(cars);
});

//* GET:  find a car by id solved by Sima
app.get("/api/cars/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //Oksana's idea:

  //

  const car = cars.find((car) => car.id === id);
  //isNaN would do the same job
  if (!Number.isInteger(id)) {
    res.status(400).send("Bad Request");
  } else if (!car) {
    res.status(404).send("Car Not Found");
  } else {
    res.status(200).json(car);
  }
});

//* BONUS GET: find a car by id (using query parameter)
// BUG FIXED by removing /api in the beginning of end point
app.get("/cars/findById", (req, res) => {
  const { id } = req.query;

  const foundCar = cars.find((car) => car.id == id);
  foundCar
    ? res.status(200).json(foundCar.name)
    : res.status(404).json("not found");
});

//* POST: add a car into the cars array
app.post("/api/cars/add", (req, res) => {
  const { name } = req.body;
  const newCar = { id: cars.length + 1, name };

  cars.push(newCar);
  res.status(200).json(newCar);
});

//* PATCH: find a car by id & update info solved by Oksana
app.patch("/api/cars/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const carIndex = cars.findIndex((car) => car.id === id);
  if (isNaN(id)) {
    ``;
    res.status(400).send("Bad request");
  } else if (carIndex !== -1) {
    const { name } = req.body;
    cars[carIndex].name = name;
    res.status(200).json(cars);
  } else {
    res.status(404).send("Not found");
  }
});

//* DELETE: find a car by id & delete the car
app.delete("/api/cars/delete/:id", (req, res) => {
  // find the index of the car to be deleted
  let indexToDelete = cars.findIndex((car) => car.id === Number(req.params.id));
  cars.splice(indexToDelete, 1);
  res.status(200).json(cars);
});

//* No Routes Found
app.get("*", (req, res) => {
  res.send("<h1>Something got wrong...😿</h1>");
});

//* Port
app.listen(port, () => {
  console.log(`app is up and running @ http://localhost:${port}`);
});
