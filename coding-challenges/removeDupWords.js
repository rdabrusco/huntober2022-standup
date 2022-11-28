// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



function removeDupWords(str){
    // str -> split (' ') -> filter
    return str.split(' ').filter((v, i, a)=> v !== a[i-1]).join(' ')
  }
  
  console.log(removeDupWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), '-> alpha beta gamma delta alpha beta gamma delta')