import { Dimensions } from 'react-native';
import { StyleService } from '@ui-kitten/components';

const screenWidth = Math.round(Dimensions.get('window').width);

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  formLayout:{
    flex:1,
    backgroundColor: 'rgb(250,250,250)',
  },
  touchLayout:{
    backgroundColor:"white",
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 72,
  },
  termLayout:{
    backgroundColor:"white",
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 72,
  },
  buttonLayout:{
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  userText:{
    marginLeft: 16,
    fontSize: 14,
  },
  iconText:{
    fontSize:140,
    color:"gray",
  },
  subText:{
    fontSize:24,
    lineHeight:36,
  },
  tapActive:{
    color: "#FF9D1A",
  },
  drawLine: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  },
  backdrop:{
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  phoneText:{
    position: 'absolute',
    left: 80,
    top:28,
    fontSize:10,
    color:"gray",
  },
  arrowIcon:{
    top: 10,
    right:-screenWidth + 190,
    fontSize:22,
    color:"gray",
  },
  defaultText:{
    marginTop:12,
    marginLeft: 16,
    fontSize: 18,
  },
  passIcon:{
    top: 10,
    right:-screenWidth + 258,
    fontSize:22,
    color:"gray",
  },
  privacyIcon:{
    top: 10,
    right:-screenWidth + 230,
    fontSize:22,
    color:"gray",
  },
  termIcon:{
    top: 10,
    right:-screenWidth + 287,
    fontSize:22,
    color:"gray",
  }
});

export default themedStyles;