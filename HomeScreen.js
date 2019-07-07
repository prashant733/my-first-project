import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput,TouchableHighlight,
  Image,Platform,CheckBox,
  Alert,Text } from 'react-native';  
  import {GoogleSignin,GoogleSigninButton,statusCodes} from 'react-native-google-signin';
  import { validateEmail, validatePassword } from 'e:/prashant/upadhyay/src/validation'
export default class HomeScreen extends React.Component {  
  
    constructor(props) {  
         
       
        super(props);
        this.state = {
          userInfo: '',
          email: '',
      emailStatus: false,
      emailError: '',
      password: '',
      passwordError: '',
      passwordStatus: false,

        };
       
          
    } 
    onClickListener = (viewId) => {
      Alert.alert("Alert", "Button pressed "+viewId);
    }
    static navigationOptions = {  
        title: 'Login',  
        headerStyle: {  
            backgroundColor: '#00994C',
              
          
        },  
          
        headerTitleStyle: {  
            fontWeight: 'bold',
            },  
    }; componentDidMount() {
        GoogleSignin.configure({
          //It is mandatory to call this method before attempting to call signIn()
          scopes: ['https://www.googleapis.com/auth/drive.readonly'],
          // Repleace with your webClientId generated from Firebase console
          webClientId:
            '143252044846-mr5n9p3v15e3mft25aj6gfpum6luis7m.apps.googleusercontent.com',
        });
      }
      _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
          await GoogleSignin.hasPlayServices({
            //Check if device has Google Play Services installed.
            //Always resolves to true on iOS.
            showPlayServicesUpdateDialog: true,
          });
          const userInfo = await GoogleSignin.signIn();
          console.log('User Info --> ', userInfo);
          this.setState({ userInfo: userInfo });
        } catch (error) {
          console.log('Message', error.message);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signing In');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services Not Available or Outdated');
          } else {
            console.log('Some Other Error Happened');
          }
        }
      };
      _getCurrentUser = async () => {
        //May be called eg. in the componentDidMount of your main component.
        //This method returns the current user
        //if they already signed in and null otherwise.
        try {
          const userInfo = await GoogleSignin.signInSilently();
          this.setState({ userInfo });
        } catch (error) {
          console.error(error);
        }
      };
      _signOut = async () => {
        //Remove user session from the device.
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ user: null }); // Remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };
      _revokeAccess = async () => {
        //Remove your application from the user authorized applications.
        try {
          await GoogleSignin.revokeAccess();
          console.log('deleted');
        } catch (error) {
          console.error(error);
        }
      };
      getEmail(email) {
        this.setState({ email: email })
        this.state.emailError = validateEmail(email).error;
        this.state.emailStatus = validateEmail(email).status;
      }
      getPassword(password) {
        this.setState({ password: password })
        this.state.passwordError = validatePassword(password).error;
        this.state.mobileNoStatus = validatePassword(password).status;
      }
      
    render() {  
        const { navigate } = this.props.navigation; 
        
 
        return (  
          <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(first_name) => this.getEmail(first_name)}
               />
          </View>
          <View style={{ flexDirection: 'row', width: '90%' }}>
            {this.state.firstNameError ? <Text style={{ color: 'red', marginTop: 5, width: '45%', alignSelf: 'center', marginLeft: '5%' }}>{this.state.firstNameError}</Text> : null}
            {this.state.middleNameError ? <Text style={{ color: 'red', marginTop: 5, width: '45%', alignSelf: 'center', marginLeft: !this.state.firstNameError ? '56%' : '5%' }}>{this.state.middleNameError}</Text> : null}
          </View>
         
          
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.getPassword(password)}
                />
          </View>
          <View style={{ flexDirection: 'row', width: '90%' }}>
            <Text style={{ color: 'red', marginTop: 5, width: '90%', alignSelf: 'center', width: '45%', marginLeft: '5%' }}>{this.state.mobileNoError}</Text>
            {this.state.landlineNoError ? <Text style={{ color: 'red', marginTop: 5, width: '90%', alignSelf: 'center', width: '45%', marginLeft: '5%' }}>{this.state.landlineNoError}</Text> : null}
          </View>

  
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Next')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
  
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
              <Text>Forgot your password?</Text>
          </TouchableHighlight>
  
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Sign')}>
              <Text>Register</Text>
          </TouchableHighlight>
        
    
  
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn}
        /> 
        </View>
        );
    }
  }  
       
      
     
 
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  input:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputStyle:{
paddingLeft:15
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  error:{
    borderColor:'red',
    borderWidth:3
  }
});
 
