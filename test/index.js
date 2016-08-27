if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill();
}
import {expect} from 'chai';
import {fetchRecords} from '../lib';

describe('fetch-ckan', () => {
  it('fetches meta data from url', async () => {
    const records = await fetchRecords('https://inventory.data.gov/api/action/datastore_search', {
      resource_id: '38625c3d-5388-4c16-a30f-d105432553a4',
      fields: '_id,OPEID,INSTNM,ADDR,CITY,STABBR,ZIP,GENTELE,LONGITUD,LATITUDE,WEBADDR',
      filters: {OPEID: ['761700', '324200']},
      limit: 10,
    });

    expect(records).to.eql([
      {
        CITY: 'Troy',
        STABBR: 'MI',
        ADDR: '550 Stephenson Hwy Suite 100',
        ZIP: '48083',
        GENTELE: '2485891078',
        WEBADDR: 'www.carnegie-institute.edu',
        INSTNM: 'Carnegie Institute',
        LATITUDE: '42.538890',
        _id: 1886,
        OPEID: '761700',
        LONGITUD: '-83.118801',
      },
      {
        CITY: 'Pittsburgh',
        STABBR: 'PA',
        ADDR: '5000 Forbes Avenue',
        ZIP: '15213-3890',
        GENTELE: '4122682000',
        WEBADDR: 'www.cmu.edu/',
        INSTNM: 'Carnegie Mellon University',
        LATITUDE: '40.444616',
        _id: 3366,
        OPEID: '324200',
        LONGITUD: '-79.942914',
      },
    ]);
  });
});
