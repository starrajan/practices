import * as queryString from "querystring"

export function getQueryParamEmail(): string {
  // queryString.parse is supposed to ignore question marks but in some tests question marks were appearing in the
  // parsed key
  const params = queryString.parse(location.search.replace('?', ''))
  return params.email as any || ''
}
