import React,{Component} from 'react';
import * as C from 'react-native-communications';

const {phonecall,email,text,web} = C;
/**
 * KikuuCall 
 * Takes telephone number to call
 * @param {*} telNum 
 * @param {*} boolPrompt 
 */
export const KikuuCall = (telNum ,prompt=false)=>phonecall(telNum,boolPrompt);

/**
 * KikuuText
 * Takes telnumber and msg
 * @param {*} telNum 
 * @param {*} msg 
 */
export const KikuuText = (telNum,msg)=>text(telNum,msg);

export const KikuuWeb  = web;
//export const KikuuMap = Map;
export const KikuuEmail = email;