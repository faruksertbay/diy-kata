function joinNames(names) {
    const nameList = names.map(obj => obj.name);
    const last = nameList.pop();
    return `${nameList.join(', ')} & ${last}`;
}
  
  module.exports = { joinNames };
  
