import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useMemo, useRef, useState} from 'react';
import Animated, {Layout} from 'react-native-reanimated';
import Backdrop from 'src/Components/BottomSheet/Backdrop';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {Sentence, Solutions} from './response';
import styles from './style';

const Home = () => {
  const [selectedAnswer, setSelectedAnswer] = useState({
    label: '',
    isTrue: false,
  });
  const [showAnswer, setShowAnswer] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['20%'], []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Header />

        <View style={styles.backView}>
          <View style={styles.bottomView}>
            <Text fontSize={12}>Fill in the missing word</Text>
            <Text fontSize={20} paddingVertical={30}>
              The{' '}
              <Text fontSize={22} style={styles.mainText} bold>
                house
              </Text>{' '}
              is small
            </Text>
            <Animated.View style={styles.textView} layout={Layout.springify()}>
              {React.Children.toArray(
                Sentence.map(s =>
                  !s.hide ? (
                    <Text style={styles.sentenceWords}>
                      {'  '}
                      {s.text}
                      {'  '}
                    </Text>
                  ) : selectedAnswer.label !== '' ? (
                    <Animated.View
                      key={selectedAnswer.label}
                      layout={Layout.springify()}>
                      <Button
                        onPress={() =>
                          setSelectedAnswer({label: '', isTrue: false})
                        }
                        borderRadius={15}
                        backgroundColor={
                          showAnswer
                            ? selectedAnswer.isTrue
                              ? globalStyles.Theme.success
                              : globalStyles.Theme.fail
                            : 'white'
                        }
                        titleColor={
                          showAnswer
                            ? 'white'
                            : globalStyles.Theme.SecondaryColor
                        }
                        shadow
                        width={80}
                        title={selectedAnswer.label}
                      />
                    </Animated.View>
                  ) : (
                    <Text> ___________ </Text>
                  ),
                ),
              )}
            </Animated.View>
            <Animated.View layout={Layout.springify()} style={styles.wrapView}>
              {Solutions.map(s =>
                selectedAnswer.label !== s.label ? (
                  <Animated.View layout={Layout.springify()} key={s.label}>
                    <Button
                      onPress={() => setSelectedAnswer(s)}
                      borderRadius={15}
                      backgroundColor="white"
                      titleColor={globalStyles.Theme.SecondaryColor}
                      shadow
                      width={80}
                      title={s.label}
                    />
                  </Animated.View>
                ) : (
                  <Animated.View layout={Layout.springify()} key="disabled">
                    <Button disabled borderRadius={15} width={80} />
                  </Animated.View>
                ),
              )}
            </Animated.View>
            <View style={styles.bottomButton}>
              <Button
                onPress={() => {
                  setShowAnswer(true);
                  bottomSheetRef.current?.present();
                }}
                disabled={selectedAnswer.label === ''}
                borderRadius={15}
                shadow
                title={
                  selectedAnswer.label === '' ? 'CONTINUE' : 'CHECK ANSWER'
                }
              />
            </View>
          </View>
        </View>
        <BottomSheetModal
          enableDismissOnClose
          ref={bottomSheetRef}
          enablePanDownToClose
          backdropComponent={Backdrop}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{
            backgroundColor: selectedAnswer.isTrue
              ? globalStyles.Theme.success
              : globalStyles.Theme.fail,
          }}>
          <View style={styles.bottomViewContainer}>
            <View style={styles.bottomSheetView}>
              <Text bold>
                {' '}
                {selectedAnswer.isTrue
                  ? ' Great Job!'
                  : 'Answer: ' +
                    Solutions.find(v => v.isTrue === true)?.label}{' '}
              </Text>
              <Text>🎉</Text>
            </View>
            <Button
              borderRadius={15}
              width="80%"
              shadow
              onPress={() => {
                setShowAnswer(false);
                bottomSheetRef.current?.dismiss();
              }}
              title="CONTINUE"
              titleColor={
                selectedAnswer.isTrue
                  ? globalStyles.Theme.success
                  : globalStyles.Theme.fail
              }
              backgroundColor="white"
            />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Home;
