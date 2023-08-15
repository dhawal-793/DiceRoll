import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
          <Text>
            Dice Roll
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
