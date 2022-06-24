import React from "react";
import { useWeb3Contract } from "react-moralis";
import { Moralis } from "moralis";

export default function Buy() {
    //Moralis.initialize("pk_test_YWj7r9hi2eu3ra1VyBGJUja92nuMK3BzPIyPncIDZew0")
    //Moralis.initPlugins()

    async function buycrypto() {

        //await Moralis.Plugins.fiat.buy();

    }


    return (
        <div>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <h1> Buy enough (0.005 Avax C-Chain) for making transactions.</h1>
                    <button type="button" onClick={() => buycrypto()} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Buy crypto
                    </button>
                </li>
            </ul>
        </div>
    )
}

