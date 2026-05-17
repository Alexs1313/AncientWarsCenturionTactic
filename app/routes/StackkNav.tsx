import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Loadder from '../components/Loadder';
import Onboarding from '../screens/Onboarding';
import BattlDetail from '../screens/BattlDetail';
import TacticsQuiz from '../screens/TacticsQuiz';
import TacticsQuizResults from '../screens/TacticsQuizResults';
import StudyTaskDetail from '../screens/StudyTaskDetail';
import StudyTaskEditNotes from '../screens/StudyTaskEditNotes';
import GridTrialGame from '../screens/GridTrialGame';
import GridTrialResults from '../screens/GridTrialResults';
import TabbsNav from './TabbsNav';
import type {RootStackParamList} from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const StackkNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#030807'},
      }}>
      <Stack.Screen name="Loadder" component={Loadder} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabbsNav" component={TabbsNav} />
      <Stack.Screen name="BattlDetail" component={BattlDetail} />
      <Stack.Screen name="TacticsQuiz" component={TacticsQuiz} />
      <Stack.Screen name="TacticsQuizResults" component={TacticsQuizResults} />
      <Stack.Screen name="StudyTaskDetail" component={StudyTaskDetail} />
      <Stack.Screen name="StudyTaskEditNotes" component={StudyTaskEditNotes} />
      <Stack.Screen name="GridTrialGame" component={GridTrialGame} />
      <Stack.Screen name="GridTrialResults" component={GridTrialResults} />
    </Stack.Navigator>
  );
};

export default StackkNav;
