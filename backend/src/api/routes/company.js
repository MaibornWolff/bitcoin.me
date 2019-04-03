import express from 'express';
import { getWalletBalance } from '../../lib/util';

export default ({
    config,
    db
  }) => {
    const router = express.Router();
    router.get('/employees', (req, res) => {
        res.json(req.employees);
    });

    router.get('/balance', async (req, res) => {
        const sumBtc = await getWalletBalance(config.company.wallet);
        return res.json(sumBtc);
    });

    return router;
}