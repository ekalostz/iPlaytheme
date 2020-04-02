import { StyleService } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  formLayout:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250,250,250)',
  },
  iconText:{
    fontSize:140,
    color:"gray"
  },
  subText:{
    fontSize:24,
    lineHeight:36
  },
  tapActive:{
    color: "#FF9D1A"
  },
  drawLine: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  },
  backdrop:{
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
});

export default themedStyles;