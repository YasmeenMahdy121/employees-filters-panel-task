import { EmployeesFiltrationPipe } from './employees-filtration.pipe';

describe('EmployeesFiltrationPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeesFiltrationPipe();
    expect(pipe).toBeTruthy();
  });
});
