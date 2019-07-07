import React from 'react';  
import { StyleSheet, View, Text, Button,TouchableHighlight,TextInput,Image
} from 'react-native';  
import { ScrollView } from 'react-native-gesture-handler';
export default class Signup extends React.Component {
    constructor(props) {  
         
       
        super(props);
        this.state = {
          firstname: '',
          lastname:'',
          email   : '',
      password: '',
      confirmpassword:'',
        }
        };
        static navigationOptions = {  
            title: 'Register Here',  
            headerStyle: {  
            backgroundColor: '#f4511e',
            justiycontent:'center',
             
            },   
            headerTitleStyle: {  
            fontWeight: 'bold',  
            },  
        };
          render(){
            const { navigate } = this.props.navigation; 
              return( 
                  
                  <View style={styles.container}>
                      <ScrollView style={{flex:1}}>
                      <View style={styles.inputContainer}>
            <TextInput style={{
                width: 350,
                height: 55,
                backgroundColor: '#42A5F5',
                margin: 5,
                padding: 8,
                color: 'white',
                borderRadius: 14,
                fontSize: 18,
                fontWeight: '500',
             
            }}
                placeholder="Enter First Name"
                secureTextEntry={false}
                underlineColorAndroid='transparent'
                onChangeText={(firstname) => this.setState({firstname})}/>
          </View>                  
          <View style={styles.inputContainer}>
            <TextInput style={{
                width: 350,
                height: 55,
                backgroundColor: '#42A5F5',
                margin: 5,
                padding: 4,
                color: 'white',
                borderRadius: 14,
                fontSize: 18,
                fontWeight: '500',
             
            }}
                placeholder="Enter Last Name"
                secureTextEntry={false}
                underlineColorAndroid='transparent'
                onChangeText={(lastname) => this.setState({lastname})}/>
          </View>    
          <View style={styles.inputContainer}>
            <TextInput style={{
                width: 350,
                height: 55,
                backgroundColor: '#42A5F5',
                margin: 5,
                padding: 8,
                color: 'white',
                borderRadius: 14,
                fontSize: 18,
                fontWeight: '500',
             
            }}
                placeholder="Enter Email Here"
                secureTextEntry={false}
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>    
          <View style={styles.inputContainer}>
            <TextInput style={{
                width: 350,
                height: 55,
                backgroundColor: '#42A5F5',
                margin: 5,
                padding: 8,
                color: 'white',
                borderRadius: 14,
                fontSize: 18,
                fontWeight: '500',
             
            }}
                placeholder="Enter Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>    
          <View style={styles.inputContainer}>
            <TextInput style={{
                width: 350,
                height: 55,
                backgroundColor: '#42A5F5',
                margin: 5,
                padding: 8,
                color: 'white',
                borderRadius: 14,
                fontSize: 18,
                fontWeight: '500',
             
            }}
                placeholder="Enter Confirm Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(confirmpassword) => this.setState({confirmpassword})}/>
          </View>            
    </ScrollView>
                  
                   <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
                   <Text>Register</Text>
               </TouchableHighlight>
               </View>

              );
              
          }
      
    
} 
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
      },
      inputContainer: {
         flex: 1,
        marginTop: 30
       },
         buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
     });

