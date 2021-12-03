// import { countDepthMeasurementIncreases } from './day1/countDepthMeasurementIncreases';
import { countAvgDepthMeasurementIncreases } from './day1/countAvgDepthMeasurementIncreases';

(async function run() {
  const [, , measurementsSrc] = process.argv;
  // const increasesCount = await countDepthMeasurementIncreases(measurementsSrc);
  const increasesCount = await countAvgDepthMeasurementIncreases(
    measurementsSrc,
  );
  console.log('increases count: ', increasesCount);
})();
