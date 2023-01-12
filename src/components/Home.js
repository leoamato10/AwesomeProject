import React, { useState } from 'react'
import { View, Text, StatusBar, ActivityIndicator, TouchableHighlight } from 'react-native'
import jokeMachine from '../machines/fetchMachine'
import { useMachine } from '@xstate/react';



const Home = () => {
    const [current, send] = useMachine(fetchMachine)

    // const { value, context: { joke } } = current

    const FetchNewJokeButton = () => (
        <TouchableHighlight style={{ width: 70, height: 30 }} onPress={() => send('FETCH_JOKE')}>
            <Text style={{}}>Fetch new joke</Text>
        </TouchableHighlight>
    )
    console.log('current:', current);



    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Joke App!</Text>
            {value === 'idle' && <FetchNewJokeButton />}

            {value === 'loading' && <ActivityIndicator />}

            {value === 'failed' && <Text style={styles.subtitle}>An error occurred :(</Text>}

            {!!joke && value === 'loaded' && (
                <>
                    <Text >{current.value}</Text>
                    <FetchNewJokeButton />
                </>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

export default Home