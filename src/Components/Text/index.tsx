/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text as RNText,
  TextProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';

type textAlignVertical = 'center' | 'auto' | 'top' | 'bottom' | undefined;

interface Props extends TextProps {
  color?: string;
  bold?: boolean;
  fontSize?: number;
  paddingVertical?: number;
  textAlignVertical?: textAlignVertical;
  containerStyle?: ViewStyle;
  btnRef?: any;
  onPress?: () => void;
}

const Text = ({
  color = globalStyles.Theme.TextBackgroundColor,
  fontSize = 14,
  bold,
  children,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  containerStyle,
  onPress,
  btnRef,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      ref={btnRef}
      disabled={!onPress}
      style={[{paddingVertical: paddingVertical * heightRef}, containerStyle]}
      onPress={onPress}>
      <RNText
        style={[
          {
            color,
            fontWeight: bold !== undefined ? 'bold' : 'normal',
            fontSize: fontSize * fontRef,

            textAlignVertical,
          },
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

export default Text;
