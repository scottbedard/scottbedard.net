// Not all browsers agree on what format response.data should be
// returned in. This function exists to convert response data
// from a string into an object for components to consume.
export const normalizeResponse = (response) => {
    if (typeof response.data === 'string') {
        let data = JSON.parse(response.data);
        response.data = data;
    }

    return response;
};
