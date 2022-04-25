import * as uuid from 'uuid'
import rateLimit from '../../utils/rate-limit'
import { get_current_cap, get_current_epoch, get_duration, get_end_time, get_initial_cap, get_max_cap, get_min_invest, get_price,
          is_redeem_enable, is_sale_enable, get_start_time, get_total_issued, get_total_raised, get_total_redeem} from '../../utils/contract_functions'
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.MORALIS_NODE_URL))
const contract_address = '0x3a9640ACA23105658402d43e0f20fbbE9d8923Aa'


const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

export default async function handler(req, res) {
  try {
    await limiter.check(res, 10, 'CACHE_TOKEN') // 10 requests per minute
    res.status(200).json({ currentCapPerAddress: await get_current_cap(web3, contract_address),
                           currentEpoch: await get_current_epoch(web3, contract_address),
                           duration: await get_duration(web3, contract_address),
                           endTime: await get_end_time(web3, contract_address),
                           initialCapPerAddress: await get_initial_cap(web3, contract_address),
                           maxCapPerAddress: await get_max_cap(web3, contract_address),
                           minCapPerAddress: await get_min_invest(web3, contract_address),
                           price: await get_price(web3, contract_address),
                           isRedeemEnable: await is_redeem_enable(web3, contract_address),
                           isSaleEnable: await is_sale_enable(web3, contract_address),
                           startTime: await get_start_time(web3, contract_address),
                           totalIssued: await get_total_issued(web3, contract_address),
                           totalRaised: await get_total_raised(web3, contract_address),
                           totalRedeem: await get_total_redeem(web3, contract_address)
                        })
    //uuid.v4()
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
  }
}