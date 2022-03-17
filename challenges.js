//***********************************************//
//#1

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3, 4, 5, 6]
function pop(arr) {
  var last = arr[arr.length - 1]
  console.log(last)
  arr.length = arr.length - 1
  console.log(arr)
  return last
}
pop(arr1)
pop(arr2)

//***************************************************************************************//


//#2 


function minToFront(nums) {
  // check if the length of nums > 0
  if (nums.length === 0) {
    return []
  }

  var min = nums[0]
  var minIdx = 0
  // loop
  for (var i = 1; i < nums.length; i++) {
    // find the min
    if (nums[i] < min) {
      min = nums[i]
      minIdx = i
    }
  }
  console.log(`min: `, min)
  console.log(`minIdx: `, minIdx)

  // if not shift it to the front
  for (var i = minIdx; i > 0; i--) {
    nums[i] = nums[i - 1]
  }

  nums[0] = min

  console.log(`nums: `, nums)
  return nums
}

const nums2 = [5, 1, 0, 2, 3, 0]
const expected2 = [0, 5, 1, 2, 3, 0]

minToFront(nums2)