import { calculatePositionAfterCourse } from '../../src/day2/calculatePositionAfterCourse';

describe('calculatePositionAfterCourse', () => {
  it('returns correct horizontal and depth positions after course completed', async () => {
    const { horizontalPosition, depth } = await calculatePositionAfterCourse(
      __dirname + '/commands.txt',
    );

    expect(horizontalPosition).toBe(15);
    expect(depth).toBe(10);
  });
});
