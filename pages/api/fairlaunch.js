import * as uuid from 'uuid'
import rateLimit from '../../utils/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

const cadena = "0xa869"
const contract_abi = [{"inputs":[{"internalType":"address","name":"_investToken","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_minInvest","type":"uint256"},{"internalType":"uint256","name":"_maxInvest","type":"uint256"},{"internalType":"uint256","name":"_totalRaiseCap","type":"uint256"},{"internalType":"address","name":"_fundsRedeemer","type":"address"},{"internalType":"address","name":"_nrt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RedeemEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SaleEnabled","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundsRedeemer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasSaleEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nrt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_launchToken","type":"address"}],"name":"setLaunchToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newfundsRedeemer","type":"address"}],"name":"setNewFundsRedeemer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalIssued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRaiseCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFundsRedeemer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contract_address = "0xFca4438f22496C779ccE1AEcBd8d1Fa126E97CA5";
const invest_token_address = "0x5425890298aed601595a70AB815c96711a31Bc65";



//  ##############################################################  READ Functions

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

const _min_invest = {
    chain: cadena,
    address: contract_address,
    function_name: "minInvest",
    abi: [{"inputs":[],"name":"minInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _nrt = {
    chain: cadena,
    address: contract_address,
    function_name: "nrt",
    abi: [{"inputs":[],"name":"nrt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
}

const _num_invested = {
    chain: cadena,
    address: contract_address,
    function_name: "numInvested",
    abi: [{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _price = {
    chain: cadena,
    address: contract_address,
    function_name: "price",
    abi: [{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _redeem_enabled = {
    chain: cadena,
    address: contract_address,
    function_name: "redeemEnabled",
    abi: [{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
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

const _total_raise_cap = {
    chain: cadena,
    address: contract_address,
    function_name: "totalRaiseCap",
    abi: [{"inputs":[],"name":"totalRaiseCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_raised = {
    chain: cadena,
    address: contract_address,
    function_name: "totalRaised",
    abi: [{"inputs":[],"name":"totalRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_redeem = {
    chain: cadena,
    address: contract_address,
    function_name: "totalRedeem",
    abi: [{"inputs":[],"name":"totalRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

//  ##############################################################  WRITE Functions

const _invest = {
    chain: cadena,
    address: contract_address,
    function_name: "invest",
    abi: [{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    params: { investAmount : ""}
}

const _redeem = {
    chain: cadena,
    address: contract_address,
    function_name: "redeem",
    abi: [{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"}]
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
                                duration: _duration, endTime: _end_time, hasSaleEnded: _has_sale_ended, investToken: _invest_token, investorInfoMap: _investor_info_map,
                                maxInvest: _max_invest, minInvest: _min_invest, nrt: _nrt, numInvested: _num_invested, price: _price, redeemEnabled: _redeem_enabled, saleEnabled: _sale_enabled, 
                                startTime: _start_time, totalIssued: _total_issued, totalRaiseCap: _total_raise_cap, totalRaised: _total_raised, totalRedeem: _total_redeem,
                                approve: _approve,
                                contractAddress: contract_address, contractABI: contract_abi})
    } catch {
      res.status(429).json({ error: 'Rate limit exceeded' })
    }
}
