// Write your solution in this file!
const employee = {
  name: "Amanda",
  streetAddress: "mine"
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  const newObj = {...employeeObj};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value) {
  empObj[key] = value;
  return empObj;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = {...employee};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log(employee);
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', "Sam"));