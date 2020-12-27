

class Storage { 
  constructor(items) {
    this.items = items
  }
  getItems() { 
    return this.items;
  }
  addItem(itemToAdd) {
    
    if (!this.items.includes(itemToAdd)) {
      this.items.push(itemToAdd);
    }
  }
  removeItem(itemToRemove) {
    const newStorage = [];
    for (const item of this.items) {
      if (item !== itemToRemove) { 
        newStorage.push(item);
      }
    }
    this.items = newStorage;
  }
}


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]