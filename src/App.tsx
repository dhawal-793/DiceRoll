import { PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
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

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(dice1)

  const rollTheDice = () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1

    switch (diceNumber) {
      case 1: setDiceImage(dice1);
        break;
      case 2: setDiceImage(dice2);
        break;
      case 3: setDiceImage(dice3);
        break;
      case 4: setDiceImage(dice4);
        break;
      case 5: setDiceImage(dice5);
        break;
      case 6: setDiceImage(dice6);
        break;
      default: setDiceImage(dice1);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Dice Roll
      </Text>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={rollTheDice} style={styles.button}>
          <Text style={styles.buttonText}>Roll</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FFF2F2',
  },
  heading: {
    color: '#8EA7E9',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
  diceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  button: {
    width: 180,
    marginTop: 50,
    marginHorizontal: 'auto',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#8EA7E9',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#8EA7E9',
  },
})

export default App;
