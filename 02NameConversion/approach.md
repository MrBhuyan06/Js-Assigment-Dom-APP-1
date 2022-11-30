# Name Conversion Project

what we need to do in this project

- Basically it is naming conversion app,where use will enter the string we have generate the corresponding coversion of the string.
  
> Step
- Lets first grap the area where we need to emmebed the converted string.
- so as we have seen to perfrom the operation we need individual functionfor each conserstion case.so, the idea is to create a class or we can also create the object and associated the function into it.
-  I have done with the class 
-  First create a class then i have make the input text to all lower case.
- Logic for the camelSpace we gave know camelcase first Letter of the first should be different.
- so have to take a spilt method which divided the string into array when any regularFunction arries.
- The iterate  over the array using any higher order function.
- check the index is ==0 then return the word or else
- charAt(0).toUpperCase()+word.slice(1).toLowerCase();
- And in the end just return the string the join option as per the your requiredment
- Then  i have create function for conversion,where we grap the btn and add the event Listerner in to it and do the validation as per your requrement grap the input text and pass to the class Constructor(text)
- Then add the return value to individual para.

> Important Think to class
1. How we can add the multiple function in  to the class.
2. How to implement the split(),map(),join method.
3. Learn About the regular Expression.
1. How to create the an element 
2. How to add class id and textCotent 
3. What is toggle how it is used in the form of classList remove and add