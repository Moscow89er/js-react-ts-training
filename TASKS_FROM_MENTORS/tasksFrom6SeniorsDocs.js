// tasks from 6Seniors Docs
// 1)
const getNumbersByParity = (data, parity) => {
    const oddNums = [];
    const evenNums = [];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] % 2 === 0) {
        evenNums.push(data[i]);
      } else if (data[i] % 2 !== 0) {
        oddNums.push(data[i]);
      }
    }
  
    if (parity === "even") return evenNums;
  
    return oddNums;
  };
  
  const data = [1, 2, 3, 4, 5, 6];
  
  console.log(getNumbersByParity(data, 'even'));
  console.log(getNumbersByParity(data, 'odd'));  