function printHelloName() {
    let name = process.argv[2];
   if (name != undefined ) {
    console.log('Hello', name)
   } else {
    console.log('Hello, Milica');
   }
  }
   for (let i = 0; i < 5; i++) printHelloName('Milica');