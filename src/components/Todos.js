import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useMachine } from '@xstate/react'
import { todoMachine } from '../machines/todoMachine'

const Todos = () => {
    const [machine, send] = useMachine(todoMachine);

    return (
        <View >
            <Text>{JSON.stringify(machine.value)}</Text>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                    },
                    styles.wrapperCustom
                ]}
                onPressIn={() => send("Todos Loaded")}
                onPressOut={() => send("Loading Todos Fail")}
            >
                <Text>Change State</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 16
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    }
});

export default Todos

