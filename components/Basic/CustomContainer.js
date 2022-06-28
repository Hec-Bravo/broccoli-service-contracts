import { Box } from "@chakra-ui/react"

export default function CustomContainer({children}) {
    return(
        <Box bg="white" width="full" height="full" px="80" py="20" rounded="lg" shadow="lg" textAlign="center">
            {children}
        </Box>
    )
}