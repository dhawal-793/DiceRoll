import { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import dice1 from './assets/Dice1.png'
import dice2 from './assets/Dice2.png'
import dice3 from './assets/Dice3.png'
import dice4 from './assets/Dice4.png'
import dice5 from './assets/Dice5.png'
import dice6 from './assets/Dice6.png'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>
        Dice Roll
      </Text>
      <View>
        <Dice imageUrl={dice1} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200,
    height: 200,
  }
})

export default App;
