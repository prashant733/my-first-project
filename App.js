import React from 'react';  
import {createStackNavigator,createAppContainer} from 'react-navigation';  
//import StartUpScreen from './src/StartUpScreen';
import HomeScreen from './src/HomeScreen';  
//import ProfileScreen from './src/ProfileScreen';
import Nextpage from './src/Nextpage'; 
import Signup from './src/Signup'; 


  
const AppNavigator = createStackNavigator(  
    {  
        
        Home: HomeScreen,  
       // Profile: ProfileScreen,
        Next:Nextpage,
        Sign:Signup
        
        
    },  
    {  
        initialRouteName: "Home"  
    }  
); 
 
export default createAppContainer(AppNavigator);  