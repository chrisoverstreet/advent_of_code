import { calculatePositionAfterCourse } from './day2/calculatePositionAfterCourse';

(async function run() {
  const [, , src] = process.argv;
  const { horizontalPosition, depth } = await calculatePositionAfterCourse(src);
  console.log(horizontalPosition, '*', depth, '=', horizontalPosition * depth);
})();
