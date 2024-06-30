/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as
 input and returns their 
 corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const number = 40;
if(number >= 90){
    console.log('Grade: A');
}
else if(number >=80 && number <=89){
    console.log('Grade: B');
}

else if(number >=70 && number <=79){
    console.log('Grade: C');
}
else if(number >=60 && number <=69){
    console.log('Grade: D');
}
else(console.log('Grade: F'))