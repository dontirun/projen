import { GitlabConfiguration } from '../../src/gitlab';
import { TestProject } from '../util';

test('throws when adding an adding a job to a non-existant nested template', () => {
  // GIVEN
  const p = new TestProject({
    stale: true,
  });
  const c = new GitlabConfiguration(p);
  c.createNestedTemplates({ foo: {} });
  // THEN
  expect(() => c.nestedTemplates.bar.addStages('baz')).toThrow(/Cannot read property '\w+' of undefined/);
});

test('does not throw when adding an services with an existing nested template', () => {
  // GIVEN
  const p = new TestProject({
    stale: true,
  });
  const c = new GitlabConfiguration(p);
  c.createNestedTemplates({ foo: {} });
  // THEN
  expect(() => c.nestedTemplates.foo.addStages('baz')).not.toThrowError;
});

