import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps {
    banner: string;
    title: string;
    subTitle: string;
    flag: string;
}

export default function City({ banner, title, subTitle, flag }: CityProps) {
    return (
        <Box borderRadius="4px" w="256px" h="279px" >

            <Image
                src={banner}
                w="256px"
                h="173px"
            />

            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">

                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500"> {title} </Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{subTitle}</Text>
                </Flex>

                <Image src={flag} w="30px" h="30px" borderRadius="50%" objectFit="cover" />

            </Flex>
        </Box>
    )
}