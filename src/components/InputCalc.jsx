import {Box, Input, Text} from '@chakra-ui/react'
import {useState} from "react";

export default function InputCalc (props) {
    const [result, setResult] = useState('');
    const [counts, setCounts] = useState('');
    function updateCounts (e) {
        // const expression = /\+|\-|\/|\*|=|[A-z]| /;
        const expression = /[0-9]/
        const lastNumber = e.target.value[e.target.value.length-2];
        if (!expression.test(lastNumber) && expression.test(e.nativeEvent.data) && e.nativeEvent.data != null) return;
        if (expression.test(e.nativeEvent.data)) setResult(eval(e.target.value))
            setCounts(e.target.value)
    }

    return (
         <Box display='flex' alignItems='center' border='2px' borderRadius='4px' borderColor='gray.50'>
             <Input value={counts} type='text' border='transparent' onInput={ (e) => {updateCounts(e)} }/>
             <Text textColor='tomato' px='4px'> {result} </Text>
         </Box>
    )
}

