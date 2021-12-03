import { countDepthMeasurementIncreases } from '../../src/day1/countDepthMeasurementIncreases';

describe('countDepthMeasurementIncreases', function () {
  describe('count_depth_measurement_increases', () => {
    it('returns the number of times a depth measurement increases from the previous measurement', async () => {
      await expect(
        countDepthMeasurementIncreases(__dirname + '/measurements.txt'),
      ).resolves.toBe(7);
    });
  });
});
