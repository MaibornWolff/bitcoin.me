export default callback => {
  // connect to a database if needed, then pass it to `callback`:
  const data = require('./Testdata.json')
  callback(null, data);
}
