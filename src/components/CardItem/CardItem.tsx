import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const CardItem = ({ item, onAddToCart, onRemoveToCart, inCart }) => {
  const price = item.type ? 450 : 350;

  return <Card maxW='sm'>
    <CardBody>
      <Image
        src={item?.image}
        alt={item?.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{item?.name}</Heading>
        <Text>
          {item?.species}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {price}$
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        {inCart ? 
        <Button variant='ghost' colorScheme='red' onClick={() => onRemoveToCart(item)}>
          Remover del carro
        </Button>
        :
        <Button variant='ghost' colorScheme='blue' onClick={() => onAddToCart(item)}>
          Agregar al carro
        </Button>
        }
      </ButtonGroup>
    </CardFooter>
  </Card>
};
