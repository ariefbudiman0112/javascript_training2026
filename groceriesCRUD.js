// DATA
let groceries = [
  { id: 1, name: "Sirloin", price: 100000, category: "meat", available: true },
  {
    id: 2,
    name: "Chicken Breast",
    price: 45000,
    category: "meat",
    available: true,
  },
  { id: 3, name: "Salmon", price: 85000, category: "fish", available: false },
  {
    id: 4,
    name: "Broccoli",
    price: 20000,
    category: "vegetable",
    available: true,
  },
  { id: 5, name: "Apple", price: 15000, category: "fruit", available: true },
];

// 1. READ - ambil semua groceries
function showAllGroceries() {
  // code here
  console.log("Groceries: ");
  groceries.forEach((item) => {
    const { id, name, price, category, available } = item;
    if (available) {
      console.log(`${id}. [V] ${name}, Rp. ${price} - ${category}.`);
    } else {
      console.log(`${id}. [ ] ${name}, Rp. ${price} - ${category}.`);
    }
  });
}

/**
 * Groceries:
 * 1. [V] Sirloin, Rp. 100000
 * 2. [ ] Tenderloin, Rp. 100000
 *
 * Beri [V] jika true, jika [ ] false
 */

// 2. READ - ambil grocery berdasarkan id
function showGroceryById(id) {
  // code here
  groceries.forEach((item) => {
    if (item.id === id) {
        const { id, name, price, category, available } = item;
        if (available) {
        console.log(`${id}. [V] ${name}, Rp. ${price} - ${category}.`);
        } else {
        console.log(`${id}. [ ] ${name}, Rp. ${price} - ${category}.`);
        }
    }
  });
}

// 3. CREATE - tambah grocery baru
function addGrocery(newItem) {
  // code here
}

// 4. UPDATE - update harga berdasarkan id
function updateGroceryPrice(id, newPrice) {
  // code here
}

// 5. UPDATE - update status availability
function updateAvailability(id, status) {
  // code here
}

// 6. DELETE - hapus grocery berdasarkan id
function deleteGrocery(id) {
  // code here
}

// 7. READ - ambil grocery yang tersedia saja
function getAvailableGroceries() {
  // code here
}

// 8. READ - ambil grocery berdasarkan category
function getGroceriesByCategory(category) {
  // code here
}

//showAllGroceries();
showGroceryById(1)