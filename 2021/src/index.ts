import { countDepthMeasurementIncreases } from './day1/countDepthMeasurementIncreases';

(async function run() {
  const [, , measurementsSrc] = process.argv;
  const increasesCount = await countDepthMeasurementIncreases(measurementsSrc);
  console.log('increases count: ', increasesCount);
})();
