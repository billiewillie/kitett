export function isRouteActive(value: string, route: object, level = 2): boolean {
  const activeInnerPage = route.fullPath.split('/')[level];

  if (activeInnerPage) {
    return value === activeInnerPage;
  }

  return false;
}