// console.log(arr);
// function check() {
// debugger
//     let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "<", ">", "/", "?"];
//     let newNumber = "";
//     for (i = 0; i < 8; i++) {
//         let asd = Math.floor(Math.random() * arr.length);
//         newNumber += arr[asd];
//     }
//     // console.log(newNumber);
//     document.getElementById("num").value = newNumber;
// }

const mobiles = [
  {
    id: "iphone",
    models: [
      {
        id: "iphone8",
        model_name: "iphone8",
        ram: "4GB",
        rom: "128GB",
        color: "Black",
        price: 64000,
        camera: "58 mega pixel",
        imageUrl: "./source/images/iphone8.png",
      },
      {
        id: "iphone9",
        model_name: "iphone9",
        ram: "4GB",
        rom: "128GB",
        color: "Black",
        price: 64000,
        camera: "58 mega pixel",
        imageUrl: "./source/images/iphone11.jpg",
      },
      {
        id: "iphone10",
        model_name: "iphone10",
        ram: "4GB",
        rom: "128GB",
        color: "Black",
        price: 64000,
        camera: "58 mega pixel",
        imageUrl: "./source/images/iphone11.jpg",
      },
      {
        id: "iphone12",
        model_name: "iphone12",
        ram: "4GB",
        rom: "128GB",
        color: "Black",
        price: 64000,
        camera: "58 mega pixel",
        imageUrl: "./source/images/iphone11.jpg",
      },
    ],
  },
  {
    id: "samsung",
    models: [
      {
        id: "samsung_GalaxyA32",
        model_name: "samsung Galaxy A32",
        price: 42799,
        color: "Light Blue",
        ram: "4GB",
        rom: "128GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "samsung_GalaxyA22",
        model_name: "samsung Galaxy A22",
        price: 35749,
        color: "Black",
        ram: "4GB",
        rom: "128GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "samsung_GalaxyA12",
        model_name: "samsung Galaxy A12",
        price: 30999,
        color: "Off White",
        ram: "4GB",
        rom: "128GB",
        camera: "48 Mega pixel",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "samsung_GalaxyA03",
        model_name: "samsung Galaxy A03",
        price: 21499,
        color: "Dark Gray",
        ram: "4GB",
        rom: "128GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
    ],
  },
  {
    id: "realme",
    models: [
      {
        id: "realme_C21",
        model_name: "Realme C21",
        price: 17995,
        color: "Black",
        rom: "32 GB",
        ram: "4GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "realme_C11",
        model_name: "Realme C11",
        price: 21999,
        color: "Gray",
        rom: "64 GB",
        ram: "4GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "realme_9i",
        model_name: "Realme 9i",
        price: 36999,
        color: "Light Blue",
        rom: "128 GB",
        ram: "4GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "realme_C11",
        model_name: "Realme C11",
        price: 16300,
        color: "Black",
        rom: "32 GB",
        ram: "4GB",
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
    ],
  },
  {
    id: "techno",
    models: [
      {
        id: "Pop 5 LTE",
        model_name: "Techno Pop 5 LTE",
        ram: "2GB",
        rom: "32GB",
        color: "Black",
        price: 16299,
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "Spark 8pro",
        model_name: "Techno spark 8 pro",
        ram: "4GB",
        rom: "64GB",
        color: "Light Green",
        price: 24999,
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "Techno pop 5",
        model_name: "Techno Pop 5",
        ram: "2GB",
        rom: "32GB",
        color: "Black",
        price: 12749,
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
      {
        id: "Techno spark",
        model_name: "Techno Spark",
        ram: "4GB",
        rom: "128GB",
        color: "Light Green",
        price: 22899,
        imageUrl: "./source/images/iphone11.jpg",
        camera: "58 mega pixel",
      },
    ],
  },
];

function findMobile(value) {
  for (let i = 0; i < mobiles.length; i++) {
    const mobile = mobiles[i];
    if (value === mobile.id) {
      return mobile;
    }
  }
  return null;
}

function findMobileModel(value, models) {
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    if (value === model.id) {
      return model;
    }
  }
  return null;
}

function getRequiredMobile() {
  const brandName = document.getElementById("brand");
  const modelName = document.getElementById("model");
  if (brandName.value) {
    const data = findMobile(brandName.value);
    if (data) {
    //   console.log("data :>> ", data);
      const brandDiv = document.getElementById("brand-div");
      brandDiv.innerHTML = `
          <div>
            <h1>Brand : ${brandName.value}</h1> <br>
          </div>
          `;

      if (modelName.value) {
        const modelData = findMobileModel(modelName.value, data.models);
        console.log("modalData :>> ", modelData);
        const modelDiv = document.getElementById("model-div");
        modelDiv.innerHTML = `
            <div>
              <h1>Model : ${modelName.value}</h1> <br>
              <p>Name: ${modelData.model_name}</p>
              <p>Color: ${modelData.color}</p>
              <p>Price: PKR ${modelData.price}</p>
              <p>RAM: ${modelData.ram}</p>
              <p>Hard Drive: ${modelData.rom}</p>
              Image: <img class="model-image" src=${modelData.imageUrl} alt="" />
            </div>
            `;
      }
    } else {
      alert("No found");
    }
  }
}
