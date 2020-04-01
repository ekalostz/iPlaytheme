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
  },
  formLabel: {
    fontSize: 10,
    marginTop: 8,
    marginHorizontal:16,
  },
  drawLine: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    marginTop: 8,
  },
  drawLineUp:{
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.1)',
    height:20,
    marginLeft:5,
    marginRight:15,
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
    top: -6,
    fontSize: 14,
  },
  nextButton: {
    marginTop:24,
  }
});

export default themedStyles;