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
  },
  formLabel: {
    fontSize: 10,
    marginTop: 16,
    marginHorizontal:16,
  },
  flexLayout: {
    flex:1,
    flexDirection: 'row',
    marginHorizontal:16,
  },
  viewRow:{
    width: 140,
    top: -24,
    height: 50
  },
  drawLineUp:{
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.1)',
    height:20,
    marginLeft:5,
    marginTop:10,
  },
  phoneText:{
    flex: 1,
    top: -3,
    fontSize: 14,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  confirmButton:{
    marginTop: 24,
    marginBottom: 10,
  },
  formSignUp:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 120,
    bottom: 0,
    left: 0,
    right: 0,
  },
  ghostStlye:{
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(33,150,243)',
    fontWeight: 'normal'
  }
});

export default themedStyles;