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
  nextButton: {
    marginTop:24,
  }
});

export default themedStyles;