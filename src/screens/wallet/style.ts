import { StyleService } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 24
  },
  listContent: {
    padding: 16,
  },
  cardItem: {
    margin: 8,
    height: 192,
    padding: 24,
    borderRadius: 4,
    backgroundColor: 'color-primary-default',
  },
  cardLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLogo: {
    height: 24,
    width: 75,
    tintColor: 'text-control-color',
  },
  cardOptionsButton: {
    position: 'absolute',
    right: -16,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  cardNumber: {
    marginVertical: 24,
  },
  cardDetailsLabel: {
    marginVertical: 4,
  },
  cardNameContainer: {
    position: 'absolute',
    left: 24,
    bottom: 24,
  },
  cardExpirationContainer: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  placeholderCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 192,
    margin: 8,
    backgroundColor: 'background-basic-color-3',
  },
  creditCardIcon: {
    alignSelf: 'center',
    width: 48,
    height: 48,
    tintColor: 'text-hint-color',
  },
});

export default themedStyles;