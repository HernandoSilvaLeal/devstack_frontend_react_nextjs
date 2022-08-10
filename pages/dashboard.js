import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiSearch,
    FiCheckCircle,
    FiInfo,
    FiPlusCircle,
    FiBell
} from "react-icons/fi"
import MyChart from '../components/MyChart'

export default function Dashboard() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >


                        <Heading // Cabecera de la columna #1
                            mt={30}
                            mb={[25, 50, 100]}
                            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                            
                        >
                            <Text textAlign="center" fontSize="2xl" >Software</Text>  
                            <Text textAlign="center" fontSize="4xl" >DevStack</Text>
                            <Text textAlign="center" fontSize="2xl" >Company</Text>
                            <Flex flexDir="column" alignItems="center" mb={2} mt={2}>
                                <Box boxSize='-4xl'>
                                    <Image border-radius="16rem" src="aipad.jpg" alt='Dan Abramov' />
                                </Box>
                                <Text textAlign="center" fontSize="xs"> Empresa Aliada y Prototipada</Text>
                                <Text textAlign="center" fontSize="xs"> AIPAD SAS</Text>
                            </Flex>
                        </Heading>



                        <Flex   // Cuerpo o body de la columna numero 1
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text className="active">Vista Principal</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiPieChart} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Documentación</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiDollarSign} fontSize="2xl" />
                                </Link>
                                <Link href="pages/" _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Activos Listados</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiBox} fontSize="2xl" /></Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text href="post/prueba.js">Recursos y Asesoria</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5} > 
                        <Avatar my={2} src="nandom.png" />
                        <Text textAlign="center" fontSize="-2xl" >Auditor Implementador</Text>
                        <Text textAlign="center" fontSize="xs" >Hernando Silva Leal</Text>
                    </Flex>
                
                </Flex>

            </Flex>















            {/* Column 2 */}
            <Flex
                w={["100%", "100%", "60%", "60%", "55%"]}
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Software Documental, <Flex display="inline-flex" fontWeight="bold"> Norma ISO 27001</Flex>
                </Heading>
                
                <Text color="gray" fontSize="sm">Proyeccion de Implementación</Text>

                <Text fontWeight="bold" fontSize="2xl">Cumplimiento al 93%</Text>


                <MyChart /> 


                <Flex justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">Actividades Aprobadas</Heading>
                        <Text fontSize="small" color="gray" ml={4}>Mayo 2022</Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>



                <Flex flexDir="column">
                    <Flex overflow="auto">
                        <Table variant="unstyled" mt={3}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Nombre de la Actividad</Th>
                                    <Th>Tipo</Th>
                                    <Th isNumeric>Calificacion</Th>
                                    <Th isNumeric>% Cumplimiento</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="1imgbd.jpg" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Bases de Datos Ofuscadas</Heading>
                                                <Text fontSize="sm" color="gray">Mayo 1, 2022 at 1:40pm</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Riesgo Identificado</Td>
                                    <Td isNumeric>9.5</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">0.59%</Text> Lv2</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="2imgusb.png" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Control de USB en Piso Operativo</Heading>
                                                <Text fontSize="sm" color="gray">Mayo 1, 2022 at 2:43pm</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Oportunidad Avistada</Td>
                                    <Td isNumeric>7.5</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">0.32%</Text> Lv1</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar size="sm" mr={2} src="3Firmware.png" />
                                            <Flex flexDir="column">
                                                <Heading size="sm" letterSpacing="tight">Firmware de Computadores</Heading>
                                                <Text fontSize="sm" color="gray">Mayo 1, 2022 at 11:23am</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Activo Controlado</Td>
                                    <Td isNumeric>6.4</Td>
                                    <Td isNumeric><Text fontWeight="bold" display="inline-table">0.58%</Text> Lv3 </Td>
                                </Tr>
                                {display == 'show' &&
                                    <>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="1imgbd.jpg" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">Base de Datos</Heading>
                                                        <Text fontSize="sm" color="gray">Mayo 1, 2022 at 1:40pm</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Riesgo Identificado</Td>
                                            <Td isNumeric>9.5</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">0.59%</Text> Lv2</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="2imgusb.png" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">Control USB Piso</Heading>
                                                        <Text fontSize="sm" color="gray">Mayo 1, 2022 at 2:43pm</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Oportunidad Avistada</Td>
                                            <Td isNumeric>7.5</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">0.32%</Text> Lv1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src="3Firmware.png" />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">Firmware de Computadores</Heading>
                                                        <Text fontSize="sm" color="gray">Mayo 1, 2022 at 11:23am</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Activo Controlado</Td>
                                            <Td isNumeric>6.4</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">0.58%</Text> Lv3 </Td>
                                        </Tr>
                                    </>
                                }
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align="center">
                        <Divider />
                        <IconButton
                            icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
                            onClick={() => {
                                if (display == 'show') {
                                    changeDisplay('none')
                                } else {
                                    changeDisplay('show')
                                }
                            }}
                        />
                        <Divider />
                    </Flex>
                </Flex>
            </Flex>














            {/* Column 3 */}
            <Flex
                w={["100%", "100%", "30%"]}
                bgColor="#F5F5F5" p="3%"
                flexDir="column"
                overflow="auto"
                minW={[null, null, "300px", "300px", "400px"]}
            >


                <Flex alignContent="center">
                    <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<FiSearch color="gray" />}
                        />
                        <Input type="number" placeholder="Busqueda Rápida" borderRadius="10px" />
                    </InputGroup>
                    <IconButton icon={<FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" p="10px" />
                    <Flex
                        w={30}
                        h={25}
                        bgColor="#B57295"
                        borderRadius="50%"
                        color="#fff"
                        align="center"
                        justify="center"
                        ml="-3"
                        mt="-2"
                        zIndex="100"
                        fontSize="xs"
                    >
                        2
                    </Flex>
                </Flex>



                <Heading letterSpacing="tight">Reporte de Avance</Heading>



                {value == 1 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #B57295, #29259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Reportar Resultado</Text>
                                    <Text fontWeight="bold" fontSize="xl">Tipo de Resultado #1a</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiPlusCircle} />
                                    <Text fontSize="xs">Agregar</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4} fontSize="xs" > Lorem ipsum dolor sit amet, consetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={7}>
                                        <Text textTransform="uppercase" fontSize="xs">Fecha</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={7}>
                                        <Text textTransform="uppercase" fontSize="xs">Tipo</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={6}>
                                        <Text textTransform="uppercase" fontSize="xs">Calificacion</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={6}>
                                        <Text textTransform="uppercase" fontSize="xs">% Cumplim</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 2 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, yellow.300, blue.500)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Reportar Riesgo</Text>
                                    <Text fontWeight="bold" fontSize="xl">Tipo de Riesgo #2b</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiPlusCircle} />
                                    <Text fontSize="xs">Agregar</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4} fontSize="xs" > Lorem ipsum dolor sit amet, consetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={7}>
                                        <Text textTransform="uppercase" fontSize="xs">Fecha</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={7}>
                                        <Text textTransform="uppercase" fontSize="xs">Tipo</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={6}>
                                        <Text textTransform="uppercase" fontSize="xs">Calificacion</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={6}>
                                        <Text textTransform="uppercase" fontSize="xs">% Cumplim</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                }
                {value == 3 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, orange.300, pink.600)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Reportar Amenaza</Text>
                                    <Text fontWeight="bold" fontSize="xl">Tipo de Amenaza #4d</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiPlusCircle} />
                                    <Text fontSize="xs">Agregar</Text>
                                </Flex>
                            </Flex>

                            <Text mb={4} fontSize="xs" > Lorem ipsum dolor sit amet, consetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </Text>

                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                <Flex flexDir="column" mr={7}>
                                        <Text textTransform="uppercase" fontSize="xs">Fecha</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={7}>
                                        <Text textTransform="uppercase" fontSize="xs">Tipo</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={6}>
                                        <Text textTransform="uppercase" fontSize="xs">Calificacion</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                    <Flex flexDir="column" mr={6}>
                                        <Text textTransform="uppercase" fontSize="xs">% Cumplim</Text>
                                        <Text fontSize="lg">****</Text>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </Flex>
                    </Box>
                }






                <Flex justifyContent="center" mt={2}>
                    <Button bgColor={value == 1 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(1)} />
                    <Button bgColor={value == 2 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(2)} />
                    <Button bgColor={value == 3 ? "gray.600" : "gray.400"} size="xs" mx={1} onClick={() => changeValue(3)} />
                </Flex>


                <Flex flexDir="column" my={4}>
                    <Flex justify="space-between" mb={2}>
                        <Text>Total Resultados Propuestos</Text>
                        <Text fontWeight="bold">185 Act</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text>Total Resultados Avanzados</Text>
                        <Text fontWeight="bold">24 Act</Text>
                    </Flex>
                </Flex>

                <Heading letterSpacing="tight" size="md" my={4}>Equipo Implementador</Heading>

                <Flex>
                    <AvatarGroup size="md" max={3}>
                        <Avatar src="alejo.png" />
                        <Avatar src="dani.jpg" />
                        <Avatar src="nandom.png" />
                    </AvatarGroup>
                    <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
                </Flex>


                <Text color="gray" mt={10} mb={2}>Registro</Text>


                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiCheckCircle color="gray.700" />}
                    />
                    <Input type="number" placeholder="Escribe la actividad a registrar..." />
                </InputGroup>


                <Text color="gray" mt={4} mb={2}>Novedades</Text>


                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiInfo color="yyyy" />}
                    />
                    <Input type="number" placeholder="Comenta aqui las novedades..." />
                </InputGroup>


                <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15}>REGISTRAR</Button>


            </Flex>
        </Flex>
    )
}