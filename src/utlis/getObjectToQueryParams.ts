const getObjectToQueryParams = (
  queryObject: Record<string, string | undefined>,
) => {
  if (!queryObject) {
    return '';
  }

  const params = new URLSearchParams();
  for (const key in queryObject) {
    // Ensure the property belongs to the object itself and is not undefined
    if (
      Object.prototype.hasOwnProperty.call(queryObject, key) &&
      queryObject[key] !== undefined
    ) {
      params.append(key, queryObject[key]);
    }
  }

  return `?${params}`;
};

export default getObjectToQueryParams;
