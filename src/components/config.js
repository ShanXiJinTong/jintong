let access_token = localStorage['access-token'] ? localStorage['access-token'] : '';
let fecshop_uuid = localStorage['fecshop-uuid'] ? localStorage['fecshop-uuid'] :'';

export const getheaders =  {
  'access-token': access_token,
  'fecshop-uuid': fecshop_uuid
};
export const postheaders = {
  'access-token': 'uoWCe730sy3U2eYTiP0mjKgj55AFETwN',
  'fecshop-uuid': 'd1edcbdc-9243-11e8-9d18-00163e021360',
  'Content-Type': 'application/x-www-form-urlencoded'
}
// 'Content-Type': 'application/x-www-form-urlencoded',
