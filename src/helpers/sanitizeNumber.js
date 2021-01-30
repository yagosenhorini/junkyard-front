export const convertToString = ((data) => {
  const stringData = String(data).replace('.', ',');
  console.log(stringData);
  return stringData;
}) 

export const convertToNumber = ((data) => {
  const numberData = Number(data.replace(',', '.'));
  return numberData;
});