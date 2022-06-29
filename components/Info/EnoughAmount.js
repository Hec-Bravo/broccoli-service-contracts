import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function EnoughAmount() {
    return (
        <Box bg="white" width="full" height="full" px="40" py="10" rounded="lg" shadow="lg" textAlign="center">
            <Text class="text-2xl" fontWeight="bold" color="dark">The maximum amount to invest is $2,000 USDC</Text>
        </Box>
    )
}
