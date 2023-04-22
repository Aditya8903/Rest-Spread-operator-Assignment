/*You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces. */

function countOccur(inputString){
    const wordCount = new Map();
    inputString.split(' ').map((word)=>{
        if(wordCount.has(word)){
            wordCount.set(word,wordCount.get(word)+1);
        }
        else{
            wordCount.set(word,1);
        }
    });
    return wordCount;
}

const inputString = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut laboommodo consequat Duis aute irure dolor in reprehenderit in voluptate velit non proident sunt in culpa qui officia deserunt mollit anim id est laborum';
const wordCount = countOccur(inputString);
console.log(wordCount);