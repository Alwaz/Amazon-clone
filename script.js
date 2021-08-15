// retriving data from firebase
const getData = () => {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          rating: doc.data().rating,
          price: doc.data().price,
        });
      });
      generateItems(items);
    });
};

const generateItems = (items) => {
  let innerItems = "";
  items.forEach((item) => {
    innerItems += `<div class="product-container ">

    <div class="product-image w-48 rounded-xl bg-white h-44 mt-7">
        <img class="h-full w-full object-contain"
            src="${item.image}"
            alt="nintendo">
    </div>
    <div class="product-name text-gray-700 font-bold ">
        ${item.name}
    </div>
    <div class="product-maker text-blue-500 font-bold text-sm">
        ${item.make}
    </div>
    <div class="rating text-gray-700">
        ⭐⭐⭐⭐⭐ ${item.rating}
    </div>
    <div class="price text-gray-800 font-bold text-lg">
        ${item.price}
    </div>

    <div class="add-to-cart-btn text-xl flex mr-8 cursor-pointer justify-center items-center bg-yellow-500 
    text-white w-48 mt-2 h-12 rounded font-bold hover:bg-yellow-600">
        Add To Cart
    </div>
</div>
`;
  });

  document.querySelector(".product-section").innerHTML = innerItems;
};

getData();
