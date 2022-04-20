import React, {useState, useEffect} from 'react';
import entities from './entities'
import { View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { GameEngine } from 'react-native-game-engine';
import Physics from './physics'
import DB, { getscore } from './info/db'

let result = 0

  export default function GameCoroutine() {
    const [running, setRunning] = useState(false)
    const [gameEngine, setgameEngine] = useState(null)
    const [currentpoints, setCurrentPoints] = useState(0)

    useEffect(() =>{
      setRunning(false)
    }, [])

    return (
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', margin: 20}}>{currentpoints}</Text>
        <GameEngine
        ref = {(ref) => {setgameEngine(ref)}}
          systems={[Physics]}
          entities={entities()}
          running={running}
          onEvent={(e) => {
            switch(e.type){
              case 'game_over':
                setRunning(false)
                gameEngine.stop()
                result = currentpoints
                setCurrentPoints(0)
                break;
              case 'new_point':
                setCurrentPoints(currentpoints + 1)
                break;
            }
          }}
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        >
        <StatusBar style="auto" hidden={true} />
        </GameEngine>

        {!running ?
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 30, alignItems: 'center'}}>
                SCORE{"\n"}{result}{"\n"}
                BEST{"\n"}{getscore(result)}
              </Text>
            <TouchableOpacity style={{backgroundColor: 'black', paddingHorizontal: 30, paddingVertical: 10}}
              onPress={() => {
                setCurrentPoints(0)
                setRunning(true)
                gameEngine.swap(entities())
              }}>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
                START GAME
              </Text>
            </TouchableOpacity>
          </View> : null}
      </View>
    );
  }