import { StyleService } from '@ui-kitten/components';


const themedStyles = StyleService.create({
  container: {
    marginTop:24,
    paddingHorizontal: 32,
  },
  formContainer: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 6,
    paddingBottom: 19,
  },
  formLabel: {
    fontSize: 10,
    marginTop: 8,
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
  },
  drawLineUp:{
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.1)',
    height:20,
    marginLeft:5,
    marginTop:10,
  },
  layoutPhone: {
    marginTop:16,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 6,
  },
  viewRow:{
    width: 140,
    top: -24,
    height: 50
  },
  flexLayout: {
    flex:1,
    flexDirection: 'row',
    marginHorizontal:16,
  },
  phoneText:{
    flex: 1,
    top: -3,
    fontSize: 14,
    backgroundColor: 'white',
    borderColor: 'white'
  },
  nextButton: {
    marginTop:24,
  }
});

export default themedStyles;