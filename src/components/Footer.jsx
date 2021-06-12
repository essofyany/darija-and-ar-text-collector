import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Footer() {
  const metaData = useSelector((state) => state.tweet.metaData);

  return (
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      borderTop="2px solid #ccc"
      w="100vw"
      h="5vh"
      position="fixed"
      bottom="0"
      px="5"
      py="2"
      mt="5"
      zIndex="sticky"
    >
      <Text fontWeight="md" fontSize="md">
        Created By Essofyany Bilal, 2021-2020
      </Text>
      <Text fontWeight="md" fontSize="lg">
        {metaData.labeledTweets}/{metaData.totalTweets}
      </Text>
    </Box>
  );
}

export default Footer;
