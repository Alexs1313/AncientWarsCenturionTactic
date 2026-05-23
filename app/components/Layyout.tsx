import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Layyout = ({
  children,
  bounce = true,
  scroll = true,
}: {
  children: React.ReactNode;
  scroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['rgb(91, 54, 4)', 'rgb(42, 26, 3)']}
      style={styles.background}>
      {scroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.fill}>{children}</View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
});

export default Layyout;
