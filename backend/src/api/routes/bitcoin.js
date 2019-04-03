import express from 'express';

import { calcBuyAmountInEur, getWalletBalance } from '../../lib/util';

export default ({
    config,
    db
  }) => {
    const router = express.Router();

    router.get('/outputs', async (req, res) => {

        const sumBtc = await getWalletBalance(config.company.wallet);
        const sumEur = calcBuyAmountInEur(req);
        const key = sumBtc / sumEur;

        const outputs = [];
        for (let employee in req.employees) {
            outputs.push({
                address: req.employees[employee].wallet,
                amount: key * req.employees[employee].amount
            })
        }

        return res.json(outputs);
    });

    return router;
}