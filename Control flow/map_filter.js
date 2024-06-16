const coding = ["Javascript", "java", "Cpp", "Python"];
const codes = coding.forEach((lang) => lang);
// console.log(codes) //undefined

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = nums.filter((val)=>{
    //     return val >= 5
    // })
    // console.log(values);
    
    let newArray = [];
    nums.forEach((num) => {
        if (num >= 5) {
            return newArray.push(num);
        }
    });
    // console.log(newArray)
    
    let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const newNum = myNums.map((val) => val + 10)
    // console.log(newNum)

    
