import { StyleService } from '@ui-kitten/components';


const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'white',
  },
  formWebView: {
    height: '79%',
  },
  scrollView: {
    paddingHorizontal: 24,
    marginTop: 24
  },
  drawLine: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    width: '100%',
    marginBottom: 16
  },
  formBottom:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  btnAgree:{
    width: '90%'
  },
  btnDisAgree:{
    width: '90%',
    marginTop: 4,
    marginBottom: 12
  },
  btnFont:{
    color: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  }
});

export default themedStyles;