import * as uuid from 'uuid'
import rateLimit from '../../utils/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

const cadena = "0xa869"
const contract_abi = [{"inputs":[{"internalType":"address","name":"_investToken","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_epochTime","type":"uint256"},{"internalType":"uint256","name":"_minInvest","type":"uint256"},{"internalType":"uint256","name":"_initialCap","type":"uint256"},{"internalType":"uint256","name":"_maxCap","type":"uint256"},{"internalType":"uint256","name":"_totalraiseCap","type":"uint256"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_nrt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RedeemEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SaleEnabled","type":"event"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addMultipleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mininvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nrt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numWhitelisted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_launchToken","type":"address"}],"name":"setLaunchToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalissued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalraiseCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalraised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalredeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contract_address = "0x3a9640ACA23105658402d43e0f20fbbE9d8923Aa";
const invest_token_address = "0xe649347127A17081c59466368d5BFCc7cf7F6548";

const _current_cap = {
    chain: cadena,
    address: contract_address,
    function_name: "currentCap",
    abi: [{"inputs":[],"name":"currentCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
  };
  
const _current_epoch = {
    chain: cadena,
    address: contract_address,
    function_name: "currentEpoch",
    abi: [{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
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

const _initial_cap = {
    chain: cadena,
    address: contract_address,
    function_name: "initialCap",
    abi: [{"inputs":[],"name":"initialCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _max_cap = {
    chain: cadena,
    address: contract_address,
    function_name: "maxCap",
    abi: [{"inputs":[],"name":"maxCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _min_invest = {
    chain: cadena,
    address: contract_address,
    function_name: "mininvest",
    abi: [{"inputs":[],"name":"mininvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _price = {
    chain: cadena,
    address: contract_address,
    function_name: "price",
    abi: [{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _redeem_enable = {
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

const _investor_info_map = {
    chain: cadena,
    address: contract_address,
    function_name: "investorInfoMap",
    abi: [{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}],
    params: { "<input>": ""}
}

const _total_issued = {
    chain: cadena,
    address: contract_address,
    function_name: "totalissued",
    abi: [{"inputs":[],"name":"totalissued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_raised = {
    chain: cadena,
    address: contract_address,
    function_name: "totalraised",
    abi: [{"inputs":[],"name":"totalraised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _total_redeem = {
    chain: cadena,
    address: contract_address,
    function_name: "totalredeem",
    abi: [{"inputs":[],"name":"totalredeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
}

const _add_multiple_white_list = {
    chain: cadena,
    address: contract_address,
    function_name: "addMultipleWhitelist",
    abi: [{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addMultipleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    params: { _addresses: []}
}

const _add_white_list = {
    chain: cadena,
    address: contract_address,
    function_name: "addWhitelist",
    abi: [{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    params: { _address: ""}
}

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
    res.status(200).json({ id: uuid.v4(), currentCap:  _current_cap, currentEpoch: _current_epoch, duration: _duration, endTime: _end_time, initialCap: _initial_cap, 
                           maxCap: _max_cap, mininvest: _min_invest, price: _price, redeemEnable: _redeem_enable, saleEnable: _sale_enabled, startTime: _start_time,
                           investorInfoMap: _investor_info_map,
                           totalissued: _total_issued, totalraised: _total_raised, totalredeem: _total_redeem,
                           addMultipleWhitelist: _add_multiple_white_list, addWhitelist: _add_white_list, invest: _invest, redeem: _redeem, 
                           approve: _approve,
                            contractAddress: contract_address, contractABI: contract_abi})
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
  }
}