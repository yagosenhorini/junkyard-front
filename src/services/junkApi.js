const getData = async () => {
  try {
    const res = await fetch('https://ferrovelho.herokuapp.com/v1/products/');
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error('Failed to get data', err);
  }
};

export default getData;