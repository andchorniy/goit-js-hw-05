const findBestEmployee = function(employees) {
  // твой код
    const employeeNames = Object.keys(employees);
    let bestEmployee = employeeNames[0];

    for (const key of employeeNames) {
        
        if (employees[key] > employees[bestEmployee]) {
            bestEmployee = key;
        }
    }
    return `${bestEmployee}:${employees[bestEmployee]}`;
    
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux