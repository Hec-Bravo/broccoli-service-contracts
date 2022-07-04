
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box, Image } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import CustomContainer from "../Basic/CustomContainer";
import React from "react";
import { useEffect, useState } from 'react';
import { Moralis } from "moralis";

export default function Trade() {
    const [avaxBalance, setAvaxBalance] = useState(6)
    const [usdcBalance, setUsdcBalance] = useState(0)

    // useEffect(() => {
    //     getInfo();
    // }, []);

    async function setDataAvaxBalance(amount) {
        setAvaxBalance(amount)
        setUsdcBalance(100)
    }

    async function setDataUsdcBalance(amount) {
        setAvaxBalance(100)
        setUsdcBalance(amount)
    }

    async function getInfo() {
        console.log(avaxBalance)
        console.log(usdcBalance)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-6 offset-md-3" id="window">
                    <h4>Swap</h4>
                    <div className="form">
                        <div className="swapbox">
                            <div className="swapbox_select token_select" id="from_token_select">
                                <Image className="token_image" src={'https://tokens.1inch.io/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b.png'} alt="hero-image" />
                                <span className="token_list_text">AVAX</span>
                            </div>
                            <div className="swapbox_select">
                                <NumberInput defaultValue={0} min={0} onChange={e => setDataAvaxBalance(e)}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </div>
                        </div>
                        <div className="swapbox">
                            <div className="swapbox_select token_select" id="to_token_select">
                                <Image className="token_image" src={'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png'} alt="hero-image" />
                                <span className="token_list_text">USDC</span>
                            </div>
                            <div className="swapbox_select">
                                <NumberInput defaultValue={0} min={0}>
                                    {usdcBalance}
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </div>
                        </div>
                        <button type="button" onClick={() => getInfo()} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Swap
                        </button>

                    </div>



                </div>
            </div>
        </div>
    )
}