import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: globalStyles.Theme.PrimaryColor,
  },
  backView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  bottomView: {
    height: '85%',
    width: '100%',
    backgroundColor: globalStyles.Theme.SecondaryColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    padding: 10 * heightRef,
    paddingTop: 50 * heightRef,
  },
  wrapView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
    marginVertical: 30 * heightRef,
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 20 * heightRef,
    width: '80%',
    alignItems: 'center',
  },
  bottomSheetView: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20 * heightRef,
  },
});

export default styles;
