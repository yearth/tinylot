import { PACKAGE_NAME, PACKAGE_VERSION } from './constants';

export default async function main() {
  // const versionChecker = new VersionChecker({
  //   packageName: '',
  //   currentPkgVersion: '',
  //   timeout: 3000,
  // });
  const config = {
    packageName: PACKAGE_NAME,
    currentPkgVersion: PACKAGE_VERSION,
    timeout: 3000,
  };

  console.log(config);
}
