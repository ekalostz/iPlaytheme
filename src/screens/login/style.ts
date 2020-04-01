import { StyleService } from '@ui-kitten/components';
import { getStatusBarHeight } from 'react-native-status-bar-height'


const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
  },
  headerContainer: {
    paddingTop: getStatusBarHeight(),
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 228,
  },
  logoText: {
    marginTop: 6,
    fontSize: 20,
    color: 'black',
  },
  formContainer: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 6,
    paddingBottom: 19,
  },
  formLabel: {
    fontSize: 10,
    marginTop: 16,
    marginHorizontal:16,
  },
  formInput: {
    fontSize: 16,
    marginTop: 6,
    marginHorizontal:16,
  },
  drawLine: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    marginTop: 18,
  },
  signUpText: {
    marginTop: 10,
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
    marginTop:4,
    marginBottom:6,
  },
  formPhone:{
    marginTop:10
  },
  formSignUp:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 120,
  },
  ghostStlye:{
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(33,150,243)',
    fontWeight: 'normal',
  }
});

export default themedStyles;