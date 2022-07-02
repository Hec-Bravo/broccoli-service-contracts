import { Flex, Image, Text, Box } from "@chakra-ui/react";

export default function BuyAvax() {
    return (
        <Flex direction="column" justifyContent="normal" alignItems="center" width="50vw" height="50vh" bgColor="aliceblue">

            <Text class="text-2xl" fontWeight="bold" color="dark">You must have Avax for making any transaction. Buy some through metamask ...</Text>
            <Box boxSize='fit-content'>
            <button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.open('https://decentralizedcreator.com/buy-avax-in-metamask-transak-and-moonpay/');
                    }} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Transak help
                    </button>
                    <button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.moonpay.com/buy/avax/');
                    }} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Moonpay help
                    </button>
            </Box>
            <Box boxSize='fit-content'>
                <Image src="/img_1.png" alt="hero-image" />
                <Image src="/img_2.png" alt="hero-image" />
                <Image src="/img_3.png" alt="hero-image" />
                <Image src="/img_4.png" alt="hero-image" />
            </Box>
        </Flex>
    )
}