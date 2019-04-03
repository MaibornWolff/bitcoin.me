import { version } from '../../package.json';
import { Router } from 'express';

import bitcoinRoutes from './routes/bitcoin';
import bitstampRoutes from './routes/bitstamp';
import companyRoutes from './routes/company';


export default ({
  config,
  db
}) => {
  let api = Router();

  // mount the facets resource
  api.use('/bitcoin', bitcoinRoutes({ config, db }));
  api.use('/bitstamp', bitstampRoutes({ config, db }));
  api.use('/company', companyRoutes({ config, db }));
  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({
      version
    });
  });


  return api;
}


