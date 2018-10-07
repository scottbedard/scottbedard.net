/**
 * Resolve deeply nested object properties. Returns undefiend if
 * the property or an intermediary property doesn't exist.
 *
 * @param  {object}     obj     object to resolve properties from
 * @param  {path}       string  period delimited list of properties to resolve
 * @return {any}
 */
export function resolveProperty(obj, path) {
    return path.split('.').reduce((p, k) => p && p[k], obj);
}
