import {Button} from "@chakra-ui/react";

export default function CountButton(props) {
    const expressions = /\+|\-|\/|\*| /;
    const lastNumber = props.data[props.data.length - 1]
    function checkExpressionType () {
        if (expressions.test(lastNumber)) return
        props.onClick(props.data + props.expression)
    }
    return (
        <Button bg='lightblue' m='5px' borderRadius='4px' onClick={checkExpressionType}>
            {props.expression}
        </Button>
    )
}
