import React from "react";
import { useWeb3Contract } from "react-moralis";

import Buy from './botones/Buy';


export default function Buying() {

    return (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <Buy />
            </li>
        </ul>

    )
}