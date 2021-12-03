import { countAvgDepthMeasurementIncreases } from '../../src/day1/countAvgDepthMeasurementIncreases';

describe('countAvgDepthMeasurementIncreases', function () {
  describe('count_depth_measurement_increases', () => {
    it('returns the the number of times the sum of measurements in this sliding window increases from the previous three-measurement sliding window sum', async () => {
      await expect(
        countAvgDepthMeasurementIncreases(__dirname + '/measurements.txt'),
      ).resolves.toBe(5);
    });
  });
});
