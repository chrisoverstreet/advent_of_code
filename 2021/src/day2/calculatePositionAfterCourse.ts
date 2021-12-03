import fs from 'fs';
import * as readline from 'readline';

export async function calculatePositionAfterCourse(
  src: string,
): Promise<{ horizontalPosition: number; depth: number }> {
  const fileStream = fs.createReadStream(src);

  const readlineInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for await (const line of readlineInterface) {
    const [command, amount] = line.split(' ');

    switch (command) {
      case 'forward':
        horizontalPosition += +amount;
        depth += aim * +amount;
        break;
      case 'down':
        aim += +amount;
        break;
      case 'up':
        aim -= +amount;
        break;
      default:
        throw new Error(`invalid command: ${command}`);
    }
  }

  return { horizontalPosition, depth };
}
