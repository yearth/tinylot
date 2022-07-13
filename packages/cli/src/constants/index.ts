import { fs, join } from '@tinylot/shared';

import { safeCall } from '@tinylot/utils';

const [err, pkgJson] = safeCall<Record<string, any>>(fs.readJSONSync, join(__dirname, '../../package.json'), 'utf8');

export const PACKAGE_NAME = pkgJson?.name;
export const PACKAGE_VERSION = pkgJson?.version;
