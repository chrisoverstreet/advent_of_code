import fs from 'fs';
import readline from 'readline';

export async function countAvgDepthMeasurementIncreases(
  src: string,
): Promise<number> {
  const fileStream = fs.createReadStream(src);

  const readlineInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let window: [number, number, number] = [Infinity, Infinity, Infinity];
  let total = 0;

  for await (const line of readlineInterface) {
    const lastAverage = windowSum(window);
    window = [window[1], window[2], +line];
    const newAverage = windowSum(window);

    if (newAverage > lastAverage) {
      total++;
    }
  }

  return total;
}

function windowSum(window: [number, number, number]): number {
  return window.reduce((sum, num) => sum + num, 0);
}
