import express from 'express';
import Bitstamp from 'bitstamp';
import { calcBuyAmountInEur } from '../../lib/util';


export default ({
    config,
    db
  }) => {
    const router = express.Router();
    // Buy Bitcoins
    router.get('/buy', (req, res) => {

        req.bitstamp.balance('eur_available', (err, result) => {
            if (err) return res.status(500).send(err);

            const amount = calcBuyAmountInEur(req);
            if (result + 5 < amount) return res.status(500).json({ error: "Not enough money in account" });

            req.bitstamp.buyMarket('btceur', 5, (err, result) => {
                if (err) return res.status(500).json(err);
                return res.json(result)
            });
        });
        // check all buyed
        // return res.json(false);

    });

    // Withdraw Bitcoins
    router.get('/withdraw', (req, res) => {

        req.bitstamp.balance('btc_available', (err, result) => {
            if (err) return res.status(500).json(err);
            req.bitstamp.bitcoin_withdrawal(result, config.company.wallet, (err, result) => {
                if (err) return res.status(500).json(err);
                return res.json(result);
            });

        })
    });

    // Get Current Bitstamp Price
    router.get('/price', (req, res) => {
        req.bitstamp.eur_usd((err, result) => {
            if (err) return res.status(500).json(err);
            return res.json(result);
        })
    });

    // Get Bitstamp Accounts Balance in EUR
    router.get('/balance/eur', (req, res) => {
        req.bitstamp.balance(null, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.json(result);
        })
    });

    router.get('/balance/btc', (req, res) => {
        req.bitstamp.balance('btc_available', (err, result) => {
            if (err) return res.status(500).json(err);
            return res.json(result);
        })
    })

    return router;

}

