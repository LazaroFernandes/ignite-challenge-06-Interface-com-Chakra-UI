import { Flex, Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
    return (
        <Flex direction="column">
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
                Cidades +100
            </Heading>
            <Grid
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={["20px", "45px"]}
                alignItems="center"
                justifyContent="center"
                px={["30px", "0"]}
            >
                <City banner="/cities/london.png" title="Londres" subTitle="Reino Unido" flag="/flags/reinoUnido.png" />
                <City banner="/cities/paris.png" title="Paros" subTitle="França" flag="/flags/frança.png" />
                <City banner="/cities/roma.png" title="Roma" subTitle="Itália" flag="/flags/italia.png" />
                <City banner="/cities/praga.png" title="Praga" subTitle="República Tcheca" flag="/flags/republicaTcheca.png" />
                <City banner="/cities/amsterdam.png" title="Amsterdã" subTitle="Holanda" flag="/flags/holanda.png" />

            </Grid>
        </Flex>
    )
}