//url -> will always be a string, will never be empty, might not contain www. may
//contain special characters in the link. May have query parameters inside link. Will always be lowercase.

//string -> domain name of url. Not inluding www or .com, .net. May contain special characters 
// domainName('http://replit.com/@bob1342678/SoftOptimalKnowledge#index.js') -> replit
// domainName('https://google.com') -> google
// domainName('https://www.github.com/rdabrusco/dear-partner') -> github
// domainName('https://www.zombie-bites.com') -> zombie-bites

function domainName(url){

    
    //remove http:// or ahttps:// as well as www if present.
    url = url.replace(`https://`, '')
    url = url.replace(`http://`, '')
    url = url.replace(`www.`, '')
    
    
  
    //split on .
    let splitUrl = url.split('.')
    //return the first index.
    return splitUrl[0]
    
  }
  
  
  console.log(domainName('http://replit.com/@bob1342678/SoftOptimalKnowledge#index.js'), 'replit')
  console.log(domainName('https://google.com'), 'google')
  console.log(domainName('https://www.github.com/rdabrusco/dear-partner'), 'github')
  console.log(domainName('https://www.zombie-bites.com'), 'zombie-bites')
  
  
  