import * as uuid from 'uuid'
import rateLimit from '../../utils/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

const cadena = "0xa869"
const contract_abi = [{"inputs":[{"internalType":"address","name":"_investToken","type":"address"},{"internalType":"address","name":"_fundsRedeemer","type":"address"},{"internalType":"address","name":"_aToken","type":"address"},{"internalType":"address","name":"_bToken","type":"address"},{"internalType":"uint256","name":"_initPrice","type":"uint256"},{"internalType":"uint256","name":"_finalPrice","type":"uint256"},{"internalType":"uint256","name":"_minInvest","type":"uint256"},{"internalType":"uint256","name":"_maxInvest","type":"uint256"},{"internalType":"uint256","name":"_maxToCollect","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SaleEnabled","type":"event"},{"inputs":[],"name":"aToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"computePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finalPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundsRedeemer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"amountIssued","type":"uint256"},{"internalType":"bool","name":"aTokenOwned","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxToCollect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oldTokensForNewTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceIncrement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newfundsRedeemer","type":"address"}],"name":"setNewFundsRedeemer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalIssued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFundsRedeemer","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contract_address = "";
const invest_token_address = "0x5425890298aed601595a70AB815c96711a31Bc65";



//  ##############################################################  READ Functions

const _a_token = {
    chain: cadena,
    address: contract_address,
    function_name: "aToken",
    abi: {"inputs":[],"name":"aToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
}

const _b_token = {
    chain: cadena,
    address: contract_address,
    function_name: "bToken",
    abi: {"inputs":[],"name":"bToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
}

const _compute_price = {
    chain: cadena,
    address: contract_address,
    function_name: "computePrice",
    abi: {"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"computePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
    params: { "epoch": ""}
}

const _current_epoch = {
    chain: cadena,
    address: contract_address,
    function_name: "currentEpoch",
    abi: {"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
}

const _current_price = {
    chain: cadena,
    address: contract_address,
    function_name: "currentPrice",
    abi: {"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
}

const _duration = {
    chain: cadena,
    address: contract_address,
    function_name: "duration",
    abi: [{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _end_time = {
    chain: cadena,
    address: contract_address,
    function_name: "endTime",
    abi: [{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _epoch_time = {
    chain: cadena,
    address: contract_address,
    function_name: "epochTime",
    abi: {"inputs":[],"name":"epochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
}

const _final_price = {
    chain: cadena,
    address: contract_address,
    function_name: "finalPrice",
    abi: {"inputs":[],"name":"finalPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
}

const _has_sale_ended = {
    chain: cadena,
    address: contract_address,
    function_name: "hasSaleEnded",
    abi: [{"inputs":[],"name":"hasSaleEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const _invest_token = {
    chain: cadena,
    address: contract_address,
    function_name: "investToken",
    abi: [{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
}

const _investor_info_map = {
    chain: cadena,
    address: contract_address,
    function_name: "investorInfoMap",
    abi: [{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}],
    params: { "<input>": ""}
}

const _max_invest = {
    chain: cadena,
    address: contract_address,
    function_name: "maxInvest",
    abi: [{"inputs":[],"name":"maxInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _max_to_collect = {
    chain: cadena,
    address: contract_address,
    function_name: "maxToCollect",
    abi: {"inputs":[],"name":"maxToCollect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
}

const _min_invest = {
    chain: cadena,
    address: contract_address,
    function_name: "minInvest",
    abi: [{"inputs":[],"name":"minInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}


const _num_invested = {
    chain: cadena,
    address: contract_address,
    function_name: "numInvested",
    abi: [{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _price_increment = {
    chain: cadena,
    address: contract_address,
    function_name: "priceIncrement",
    abi: {"inputs":[],"name":"priceIncrement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
}


const _sale_enabled = {
    chain: cadena,
    address: contract_address,
    function_name: "saleEnabled",
    abi: [{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

const _start_time = {
    chain: cadena,
    address: contract_address,
    function_name: "startTime",
    abi: [{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_issued = {
    chain: cadena,
    address: contract_address,
    function_name: "totalIssued",
    abi: [{"inputs":[],"name":"totalIssued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_raised = {
    chain: cadena,
    address: contract_address,
    function_name: "totalRaised",
    abi: [{"inputs":[],"name":"totalRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}



//  ##############################################################  WRITE Functions

const _invest = {
    chain: cadena,
    address: contract_address,
    function_name: "invest",
    abi: [{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    params: { investAmount : ""}
}


//  ##############################################################  WRITE Functions for the stable coin (investToken)
const _approve = {
    chain: cadena,
    address: invest_token_address,
    function_name: "approve",
    abi: [{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],
    params: { spender : "", amount: "" }
}



export default async function handler(req, res) {
    try {
      await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
      res.status(200).json({ id: uuid.v4(), 
                                aToken: _a_token, bToken: _b_token, computePrice: _compute_price, currentEpoch: _current_epoch, currentPrice: _current_price, duration: _duration,
                                endTime: _end_time, epochTime: _epoch_time, finalPrice: _final_price, hasSaleEnded: _has_sale_ended, investToken: _invest_token, 
                                investorInfoMap: _investor_info_map, maxInvest: _max_invest, maxToCollect: _max_to_collect, minInvest: _min_invest, numInvested: _num_invested,
                                priceIncrement: _price_increment, saleEnabled: _sale_enabled, startTime: _start_time, totalIssued: _total_issued, totalRaised: _total_raised,
                                invest: _invest, approve: _approve,
                                contractAddress: contract_address, contractABI: contract_abi})
    } catch {
      res.status(429).json({ error: 'Rate limit exceeded' })
    }
}
