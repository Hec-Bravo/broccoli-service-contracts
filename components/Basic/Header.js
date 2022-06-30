import { Button, Center, Flex, Text } from "@chakra-ui/react";
import HeaderBalance from '../Info/HeaderBalance'

export default function Header({ isAuthenticated, isAuthenticating, user, authenticate, logout, isLoggingOut }) {

    return (
        <header>
            <Flex justifyContent="space-between" bg="darkcyan" color="white" px={10} py={6}>
                <Center><Text fontSize="xl" fontWeight="bold">Gain10X</Text></Center>
                <Center>
                    {isAuthenticated ? (
                        <>
                            <table className="min border text-center">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-2xl font-medium text-white px-6 py-4">
                                            AVAX balance:
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            <HeaderBalance user={user}/>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                            <Text class="text-2xl">{user.get("ethAddress")}</Text>
                            <Button ml="4" class="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={logout} disabled={isLoggingOut}>Disconnect</Button>
                        </>
                    ) : (
                        <Button class="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => authenticate({
                            signingMessage: "Sign to auth on Gain10X"
                        })} disabled={isAuthenticating}>Connect</Button>
                    )}
                </Center>
            </Flex>
        </header>
    )
}