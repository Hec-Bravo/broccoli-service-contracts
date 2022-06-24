import React from "react";
import { useWeb3Contract } from "react-moralis";
import { Moralis } from "moralis";

export default function Buy() {
    //Moralis.initialize("pk_test_YWj7r9hi2eu3ra1VyBGJUja92nuMK3BzPIyPncIDZew0")
    //Moralis.initPlugins()

    async function buycrypto() {

        await Moralis.Plugins.fiat.buy();

    }


    return (
        <div>
            <button type="button" onClick={() => buycrypto()} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Buy crypto
            </button>
            <button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://traderjoexyz.com/trade#/';
            }} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Trade crypto
            </button>
        </div>
    )


}

