import got from 'got';
import bitcoin from 'bitcoinjs-lib';

/**	Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *		list(req, res) {
 *			collection.find({}, toRes(res));
 *		}
 */
export function toRes(res, status = 200) {
	return (err, thing) => {
		if (err) return res.status(500).send(err);

		if (thing && typeof thing.toObject === 'function') {
			thing = thing.toObject();
		}
		res.status(status).json(thing);
	};
}

export function calcBuyAmountInEur(req) {
	let totalAmount = 0;

	for (let emp in req.employees) {
		totalAmount += req.employees[emp].amount
	}

	return totalAmount
}

export function getWalletBalance(address) {
	return new Promise((resolve, reject) => {
		const queryUrl = 'https://blockchain.info/q/addressbalance/';
		got(queryUrl + address).then((res) => resolve(parseInt(res.body, 10))).catch(() => resolve(0));
	})
}

export function createTx(outputs) {
	const tx = new bitcoin.TransactionBuilder();

}