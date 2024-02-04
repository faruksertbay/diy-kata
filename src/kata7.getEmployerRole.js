function getEmployerRole(employeeName, employees) {
    const employee = employees.find(emp => emp.name === employeeName);
    return employee ? employee.role : undefined;
}
  
  module.exports = { getEmployerRole };
  