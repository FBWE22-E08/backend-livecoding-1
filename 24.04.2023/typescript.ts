// Mongoose Schema looks a lot like a typescript interface
//
interface Guitar {
  brand: string;
  type: string;
  price: number;
  isElectric: boolean;
  manufactureDate: number;
  availableColours: string[];
}

// We can use the Guitar interface to type the guitar object
const guitar: Guitar = {
  brand: "Yahama Pacific",
  type: "Electric",
  price: 400,
  isElectric: true,
  manufactureDate: 239344558,
  availableColours: ["blue", "yellow", "violet"],
};
