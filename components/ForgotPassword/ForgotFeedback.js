import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
function ForgotFeedback(props) {
    let text_color, text_content = ''
    if (props.returnCode === 1) {
        text_content = 'All credentials are valid'
        text_color = 'green'
    }
    else if (props.returnCode === 4) {
        text_content = 'Email is not valid'
        text_color = 'red'
    }
    else {
        text_content = 'Unknown error'
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
export default ForgotFeedback