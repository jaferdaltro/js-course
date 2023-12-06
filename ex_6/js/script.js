// function main() {
//   const panel = document.querySelector('.container');
//   const date = new Date(1976, 2, 3, 17, 45);

//   panel.innerHTML = `${weekDay(date.getDay())}, ${date.getDate()} de ${date.getMonth()} de ${date.getFullYear()} ${date.getTime()}`;

//   function weekDay(day) {
//     switch (day) {
//       case 0:
//         return 'Sunday';
//       case 1:
//         return 'Monday';
//       case 2:
//         return 'Tuesday';
//       case 3:
//         return 'Wednesday';
//       case 4:
//         return 'Thursday';
//       case 5:
//         return 'Friday';
//         break;
//       case 6:
//         return 'Saturday';
//       default:
//         return '';
//     }
//   }
// }

// main();

const panel = document.querySelector('.container');
const date = new Date();
panel.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})