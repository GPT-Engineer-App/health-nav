import { Box, Container, Flex, IconButton, Input, Link, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaCog, FaSignOutAlt, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="blue.800" color="white" position="fixed" top={0} left={0} right={0} zIndex={1}>
        <Flex align="center" mr={5}>
          <Text fontSize="lg" fontWeight="bold">
            HealthApp
          </Text>
        </Flex>

        <Box display="flex" alignItems="center">
          <Link href="#" px={3}>
            <FaHome />
            Home
          </Link>
          <Link href="#" px={3}>
            <FaCalendarAlt />
            My Bookings
          </Link>
          <Link href="#" px={3}>
            <FaCog />
            Settings
          </Link>
          <Link href="#" px={3}>
            <FaSignOutAlt />
            Logout
          </Link>
        </Box>
      </Flex>

      {/* Search and Filter Section */}
      <VStack spacing={4} mt="100px" p={4} bg="gray.100">
        <Flex gap="20px">
          <Input placeholder="Search by name" />
          <Select placeholder="Select specialty">
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
          </Select>
          <Input type="date" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </Flex>
      </VStack>

      {/* Professional List */}
      <SimpleGrid columns={3} spacing={5} p={5}>
        <Box bg="white" p={4} boxShadow="md" borderRadius="md">
          <Flex direction="column" align="center">
            <Box boxSize="100px" bg="gray.200" borderRadius="full" mb={4} />
            <Text fontSize="xl" fontWeight="bold">
              Dr. Jane Doe
            </Text>
            <Text>Cardiologist</Text>
            <Text fontSize="sm">Experienced in adult cardiology and echocardiography.</Text>
          </Flex>
        </Box>
        {/* More cards can be added here */}
      </SimpleGrid>

      {/* Footer */}
      <Flex as="footer" py={4} bg="blue.800" color="gray.300" mt={10} justify="center">
        <Text fontSize="sm">© 2023 HealthApp. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;
