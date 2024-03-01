import { useState } from 'react'
import './App.css'
import {Box, Button, Text} from "@chakra-ui/react";

import Numbers from "./components/Numbers.jsx";
import CountButton from "./components/CountButton.jsx";




function App() {
  const [counts, setCounts] = useState('0');
  const [result, setResult] = useState('');

  function applyExpression (countedNumber) {
    setCounts(countedNumber)
    setResult(eval(counts))
  }

    return (
      <div className="App">


        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' h='100vh'>
          <Box display='flex' gap='10px' flexDirection='column' justifyContent='center' alignItems='center'>
            <Box display='flex'  justifyContent='space-between' w='200px'>
              <Text display='flex' justifyContent='start' alignItems='center' bg='gray.50' w='100%' h='38px' px='4px'
              borderRadius='8px'>
                {counts}
              </Text>
              <Text w='fit-content' h='38px' textColor='tomato'>
                {result}
              </Text>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='center' flexWrap='wrap' w='300px' >
              <Numbers data={counts} onClick={setCounts} />
              <Box display='flex' w='70%' flexWrap='wrap' flexDirection='row'  justifyContent='flex-start' alignItems='center'>
                <CountButton  data={counts} expression={'+'} onClick={applyExpression} />
                <CountButton  data={counts} expression={'-'} onClick={applyExpression} />
                <CountButton  data={counts} expression={'*'} onClick={applyExpression} />
                <CountButton  data={counts} expression={'/'} onClick={applyExpression} />
                <Button bg='tomato' m='4px' borderRadius='4px' onClick={() => {setResult(eval(counts))}}>
                  =
                </Button>
              </Box>
            </Box>

          </Box>
        </Box>


      </div>
  )
}




export default App
