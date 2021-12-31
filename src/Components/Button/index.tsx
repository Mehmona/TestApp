import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ColorValue,
} from 'react-native';
import {StyleSheet, View} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';
import Text from '../Text';

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  shadow?: boolean;
  titleStyle?: TextStyle;
  borderRadius?: number;
  width?: string | number;
}

const Button = ({
  loading,
  shadow,
  title,
  titleStyle,
  titleColor,
  borderRadius,
  backgroundColor,
  width,
  style,
  ...rest
}: Props) => {
  let isDisabled = rest.disabled || false;
  return (
    <TouchableOpacity
      {...rest}
      style={[
        shadow && styles.shadow,
        styles.buttonStyle,
        width !== undefined && {width},
        borderRadius !== undefined && {borderRadius},
        backgroundColor !== undefined && {backgroundColor},
        isDisabled && {backgroundColor: globalStyles.Theme.AccentPrimaryColor},
        style,
      ]}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text fontSize={14} color={titleColor} style={titleStyle} bold>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonStyle: {
    borderRadius: 25,
    width: '100%',
    backgroundColor: globalStyles.Theme.success,
    height: 40 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5 * heightRef,
  },
  textStyle: {
    paddingHorizontal: 10,
  },
});
