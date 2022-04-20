import React from 'react'
import Login from '../screens/LoginPage'

let ID
let PW
let highscore = 0

export const getscore = (_score) => {
    if(highscore < _score) {
        highscore = _score
    }
    return highscore
}


export const getID = (_id) => {
    ID = _id
}

export const getPW = (_pw) => {
    PW = _pw
}


export const loginMatch = (_id, _pw) => {
    if(ID == _id) {
        if(PW == _pw) {
            return true;
        }
    }
    return false;
}

export const pwMatch = (_pw1, _pw2) => {
    if( _pw1 == _pw2) {
        return true;
    }
    return false;
}