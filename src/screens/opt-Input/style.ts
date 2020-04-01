import { StyleService } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 32,
  },
  layoutOtp: {
    marginTop: 32,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridOtp: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputStyle: {
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  inputText: {
    fontSize: 22,
    color: 'black',
    lineHeight: 72
  },
  layoutNum: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  numButton: {
    width: 72,
    height: 72,
    backgroundColor: 'transparent',
    borderColor: 'rgba(0,0,0,0.1)',
  },
  numFont: {
    fontSize: 36,
    color: 'black',
    lineHeight: 72,
    fontFamily: 'sarabun-regular'
  },
  hideButton: {
    width: 72,
    height: 72,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  formResend:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
  },
  ghostStlye:{
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(33,150,243)',
    fontWeight: 'normal',
  }
});

export default themedStyles;