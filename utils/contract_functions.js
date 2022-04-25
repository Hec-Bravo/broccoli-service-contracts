import { amount_In_filter, amount_Out_filter } from './solidity_decimals'
const contract_abi = [{"inputs":[{"internalType":"address","name":"_investToken","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"uint256","name":"_epochTime","type":"uint256"},{"internalType":"uint256","name":"_minInvest","type":"uint256"},{"internalType":"uint256","name":"_initialCap","type":"uint256"},{"internalType":"uint256","name":"_maxCap","type":"uint256"},{"internalType":"uint256","name":"_totalraiseCap","type":"uint256"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_nrt","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":'NaN',"inputs":[{"indexed":'NaN',"internalType":"address","name":"investor","type":"address"},{"indexed":'NaN',"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":'NaN',"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":'NaN',"inputs":[{"indexed":'NaN',"internalType":"address","name":"investor","type":"address"},{"indexed":'NaN',"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":'NaN',"inputs":[{"indexed":'NaN',"internalType":"bool","name":"enabled","type":"bool"},{"indexed":'NaN',"internalType":"uint256","name":"time","type":"uint256"}],"name":"RedeemEnabled","type":"event"},{"anonymous":'NaN',"inputs":[{"indexed":'NaN',"internalType":"bool","name":"enabled","type":"bool"},{"indexed":'NaN',"internalType":"uint256","name":"time","type":"uint256"}],"name":"SaleEnabled","type":"event"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addMultipleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enableRedeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investAmount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"investorInfoMap","outputs":[{"internalType":"uint256","name":"amountInvested","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mininvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nrt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numWhitelisted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redeemEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_launchToken","type":"address"}],"name":"setLaunchToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalissued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalraiseCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalraised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalredeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawLaunchtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"}];



// #####################################################################################  READ functions
async function get_current_cap(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);
        
        const answer = await contract.methods.currentCap().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_current_epoch(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.currentEpoch().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_duration(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.duration().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_end_time(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.endTime().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_initial_cap(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.initialCap().call();
        return amount_Out_filter(web3, answer, 18);
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_max_cap(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.maxCap().call();
        return amount_Out_filter(web3, answer, 18);
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_min_invest(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.mininvest().call();
        return amount_Out_filter(web3, answer, 18);
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_price(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.price().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function is_redeem_enable(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.redeemEnabled().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function is_sale_enable(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.saleEnabled().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_start_time(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.startTime().call();
        return answer;
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_total_issued(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.totalissued().call();
        return amount_Out_filter(web3, answer, 18);
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_total_raised(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.totalraised().call();
        return amount_Out_filter(web3, answer, 18);
        
    } catch (e) {
        return 'NaN';
    }
}

async function get_total_redeem(web3, contract_address) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const answer = await contract.methods.totalredeem().call();
        return amount_Out_filter(web3, answer, 18);
        
    } catch (e) {
        return 'NaN';
    }
}

// #####################################################################################  WRITE functions

async function erc20_approve(web3, contract_address, address_to_approve, amount, token_decimals) {
    try {
        const token_abi = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
        const contract = new web3.eth.Contract(token_abi, contract_address);

        const sentTx = await contract.methods.approve(address_to_approve, amount_In_filter(web3, amount, token_decimals));

    } catch (e) {
        console.log("------------------------------------");
        console.log("ERROR in: contract_invest()")
        console.log(e);
    }
}

async function contract_invest(web3, contract_address,  gas_price, amount_in) {
    try {
        const contract = new web3.eth.Contract(contract_abi, contract_address);

        const sentTx = await contract.methods.invest(amount_In_filter(web3, amount_in, 18)).send({ gas: 100000, gasPrice:  web3.utils.toWei(gas_price.toString(), 'gwei') });

    } catch (e) {
        console.log("------------------------------------");
        console.log("ERROR in: contract_invest()")
        console.log(e);
    }
}

module.exports = {  
    get_current_cap: get_current_cap,
    get_current_epoch: get_current_epoch,
    get_duration: get_duration,
    get_end_time: get_end_time,
    get_initial_cap: get_initial_cap,
    get_max_cap: get_max_cap,
    get_min_invest: get_min_invest,
    get_price: get_price,
    is_redeem_enable: is_redeem_enable,
    is_sale_enable: is_sale_enable,
    get_start_time: get_start_time,
    get_total_issued: get_total_issued,
    get_total_raised: get_total_raised,
    get_total_redeem: get_total_redeem
};