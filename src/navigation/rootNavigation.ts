import * as React from 'react';
import {
  StackActions,
  NavigationContainerRef, NavigationAction
} from '@react-navigation/native';

export const navigationRef:
  React.RefObject<NavigationContainerRef<any>> = React.createRef();
export function navigate(name: string, params?: object): void {
  navigationRef.current?.navigate(name, params);
}
export function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}
export function replace(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function push(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function pop(count?:number):void{
  navigationRef.current?.dispatch(StackActions.pop(count))
}
export function goBack(): void {
  navigationRef.current?.goBack();
}
function reset(screen:string):void{
  navigationRef.current?.reset({
    index:0,
    routes:[{name:screen}]
  })
}
export const navigation = {
  navigate,
  dispatch,
  replace,
  push,
  pop,
  goBack,
  reset
}
