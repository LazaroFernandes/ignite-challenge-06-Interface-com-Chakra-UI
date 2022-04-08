import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
    return (
        <Flex
            align="cneter"
            justify="space-between"

        >
            <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                    fontSize={["2xl", "5xl"]}
                    fontWeight="500"
                    color="yellow.400"
                >
                    50
                </Heading>
                <Text
                    fontWeight="600"
                    fontSize={["md", "xl"]}
                    color="gray.700"
                >
                    países
                </Text>
            </Flex>
            <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                    fontSize={["2xl", "5xl"]}
                    fontWeight="500"
                    color="yellow.400"
                >
                    60
                </Heading>
                <Text
                    fontWeight="600"
                    fontSize={["md", "xl"]}
                    color="gray.700"
                >
                    línguas
                </Text>
            </Flex>
            <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                    fontSize={["2xl", "5xl"]}
                    fontWeight="500"
                    color="yellow.400"
                >
                    27
                </Heading>
                <Text
                    fontWeight="600"
                    fontSize={["md", "xl"]}
                    color="gray.700"
                >
                    cidades +100
                    <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon
                                    cursor="pointer"
                                    as={RiInformationLine} ml="1"
                                    color="gray.400"
                                    w={["10px", "16px"]}
                                    h={["10px", "16px"]}
                                />
                            </span>
                        </PopoverTrigger>
                        <PopoverContent
                            bg="gray.200"
                            color="gray.700"
                        >
                            <PopoverArrow 
                                bg="gray.200"
                            />
                            <PopoverCloseButton />
                            <PopoverBody
                                fontWeight="400"
                                fontSize="lg"
                            >
                                Istambul<br />
                                Baku<br />
                                Bucareste<br />
                                Minsk<br />
                                Hamburgo<br />
                                Barcelona<br />
                                Kharkiv<br />
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Text>
            </Flex>

        </Flex>
    )
}