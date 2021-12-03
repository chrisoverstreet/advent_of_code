import fs from 'fs';
import readline from 'readline';

export async function countDepthMeasurementIncreases(
  src: string,
): Promise<number> {
  const fileStream = fs.createReadStream(src);

  const readlineInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let last = Infinity;
  let total = 0;

  for await (const line of readlineInterface) {
    const measurement = +line;
    if (measurement > last) {
      total++;
    }
    last = measurement;
  }

  return total;
}
