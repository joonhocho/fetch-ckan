import fetch from 'node-fetch';
import querystring from 'querystring';


const withoutUndefined = (obj) => {
  const dest = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (val !== undefined) {
      dest[key] = val;
    }
  }
  return dest;
};

// http://docs.ckan.org/en/latest/maintaining/datastore.html
// https://inventory.data.gov/dataset/032e19b4-5a90-41dc-83ff-6e4cd234f565/resource/38625c3d-5388-4c16-a30f-d105432553a4?filters=OPEID%3A100200
const fetchApi = (endpoint, {
  // resource_id,
  // q
  // distinct
  // offset
  // sort
  // fields
  // limit
  filters,
  ...rest,
}) => {
  const query = withoutUndefined(rest);
  if (filters && Object.keys(filters).length) {
    query.filters = JSON.stringify(filters);
  }

  const qs = querystring.stringify(query);

  return fetch(`${endpoint}?${qs}`).then((res) => res.json());
};


const fetchRecords = (...args) => fetchApi(...args).then((response) =>
  response.success ? response.result.records : []
);


export {
  fetchApi,
  fetchRecords,
};

export default {
  fetchApi,
  fetchRecords,
};
