function incapsulatedBinarSort() {
  let binarArr = [0, 1, 0, 1, 0, 1, 0, 1, 1, 0];
  
  // 1)
  const sort = (nums) => {
    const zeroArr = [];
    const oneArr = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        zeroArr.push(nums[i]);
      }
  
      if (nums[i] === 1) {
        oneArr.push(nums[i]);
      }
    }
  
    return zeroArr.concat(oneArr);
  }
  
  const result = sort(binarArr);
  
  console.log(result);
  
  // 2)
  const binarSort = (nums) => {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      if (nums[left] === 0) {
        left++;
      } else if (nums[right] === 1) {
        right--;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    }
  
    return nums;
  }
  
  const sortedResult = binarSort(binarArr);
  console.log(sortedResult);
}

incapsulatedBinarSort();