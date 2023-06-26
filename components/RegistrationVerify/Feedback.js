import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
function Feedback(props) {
    let text_color, text_content = ''
    if (props.returnCode === 1) {
        text_content = 'All credentials are valid'
        text_color = 'green'
    }
    else if (props.returnCode === 2) {
        text_content = 'First name is not valid'
        text_color = 'red'
    }
    else if (props.returnCode === 3) {
        text_content = 'Last name is not valid'
        text_color = 'red'
    }
    else if (props.returnCode === 4) {
        text_content = 'Email is not valid'
        text_color = 'red'
    }
    else if (props.returnCode === 5) {
        text_content = 'Password is not valid'
        text_color = 'red'
    }
    return (
        <SafeAreaView>
            <Text style={{
                color: text_color,
                textAlign: 'center',
                fontSize: 16,
            }}>{"\n"}{text_content}{"\n"}</Text>
        </SafeAreaView>
    )
}
export default Feedback