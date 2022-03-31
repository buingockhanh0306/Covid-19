import React, { useState } from 'react'
import { Button, Input, ButtonGroup, Stack, Grid, GridItem } from '@chakra-ui/react'

const ChakraUI: React.FC = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem flexDirection="column" display="flex" justifyContent="center" alignItems="center" w="100%">
        <Input placeholder="Nhập vào đây" />
        <Button mt={5} w={'100px'} colorScheme="orange">
          Button
        </Button>
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  )
}

export default ChakraUI
