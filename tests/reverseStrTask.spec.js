const { test, expect } = require('@playwright/test');

test('TC01- Reverse String', async () => {

  const input = 'i love my company';

  const reversed = input.split('').reverse().join('');

  console.log('Reversed:', reversed);

  await expect(reversed).toBe('ynapmoc ym evol i');

});


// ------------------------------------------------------------------------------------


// const { test, expect } = require('@playwright/test');

// test('TC - Custom Case Format', async () => {

//   const input = 'i love my company';

//   const words = input.split(' ');
//   let result = '';

//   for (let word of words) {
//     if (word.length <= 2) {
//       result = result + word.toUpperCase() + ' ';
//     } else {
//       const first = word[0].toUpperCase();
//       const middle = word.slice(1, word.length - 1).toLowerCase();
//       const last = word[word.length - 1].toUpperCase();

//       result = result + first + middle + last + ' ';
//     }
//   }

//   // remove last space
//   result = result.slice(0, result.length - 1);

//   console.log('Formatted:', result);

//   await expect(result).toBe('I LovE MY CompanY');

// });


