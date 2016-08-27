import fetch from 'node-fetch';
import querystring from 'querystring';


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
  const qs = querystring.stringify({
    filters: filters && JSON.stringify(filters),
    ...rest,
  });
  return fetch(`${endpoint}?${qs}`).then((res) => res.json());
};


const fetchRecords = (...args) => fetchApi(...args).then((response) => {
  if (response.success) {
    return response.result.records;
  }

  return [];
});


export {
  fetchApi,
  fetchRecords,
};

export default {
  fetchApi,
  fetchRecords,
};
