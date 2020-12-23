import { prueba } from './prueba';
describe('prueba', () => {
  it('should be pass', () => {
    const result = prueba();
    expect(result).toBe(2);
  });
});
