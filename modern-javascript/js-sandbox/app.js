let re;
// Literal Characters
re = /hello/;

// String to match
const str = 'Hello World';

// Log Result
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if( re.test(str)){
    console.log(`${str} matches ${re.sourse}`);
  } else {
    console.log(`${str} does NOT match ${re.sourse}`);
  }
}


function* createIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}


gen = createIds();
console.log(gen.next());
