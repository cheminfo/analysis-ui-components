import { expect, test } from 'vitest';

import { getTestFileCollection } from '../../../../../test-utils.js';
import { cary500Loader } from '../cary500Loader.js';

test('cary500Loader', async () => {
  const fileCollection = await getTestFileCollection('cary500');
  // we should filter to keep only the right data
  const results = await cary500Loader(fileCollection);

  expect(results.uvvis?.entries).toHaveLength(8);

  const xNonFinite = results.uvvis?.entries[0].data[0].variables.x.data.filter(
    (datum) => !Number.isFinite(datum),
  );
  expect(xNonFinite).toHaveLength(0);
  const yNonFinite = results.uvvis?.entries[0].data[0].variables.y.data.filter(
    (datum) => !Number.isFinite(datum),
  );
  expect(yNonFinite).toHaveLength(0);
});
