export const convertToString = ((data) => {
  const stringData = String(data).replace('.', ',');
  console.log(stringData);
  return stringData;
}) 

export const convertToNumber = ((data) => {
  const clearString = data.replace(',', '.');
  return Number(clearString);
});