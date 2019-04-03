import { Router } from 'express';
import Bitstamp from 'bitstamp';
import Bitcoin from 'bitcoinjs-lib';
import employees from '../testdata.json'

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	// @TODO: Init Bitstamp as Middleware
	// @TODO: Init Bitcoin Lib as Middleware
	routes.use((req, res, next) => {

		// init Bitstamp
		const bc = config.bitstamp;
		req.bitstamp = new Bitstamp(bc.key, bc.secret, bc.client_id, bc.timeout, bc.host);

		// init Bitcoin Lib
		req.bitcoin = Bitcoin;

		// @TODO: Replace with Real data
		// Set Testdata
		req.employees = employees
		next();
	})

	return routes;
}
