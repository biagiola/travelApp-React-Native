import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'

const HomeScreen = () => {
  const categoryIcons = [
    <Icon name='flight' size={25} color={COLORS.primary} />,
    <Icon name='beach-access' size={25} color={COLORS.primary} />,
    <Icon name='near-me' size={25} color={COLORS.primary} />,
    <Icon name='place' size={25} color={COLORS.primary} />
  ]
  const ListCategories = () => {
    return <View style={styles.categoryContainer}>
      {categoryIcons.map((icon, index) => (
        <View key={index} style={styles.iconContainer}>{icon}</View>
      ))}
    </View>
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <Icon name='sort' size={28} color={COLORS.white} />
        <Icon name='notifications-none' size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View 
          style={{
            backgroundColor: COLORS.primary, 
            height: 120,
            paddingHorizontal: 20
          }}>
          <View>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>beautiful places</Text>
            <View style={styles.inputContainer}>
              <Icon name='search' size={28} />
              <TextInput 
                placeholder='Search place'
                style={{color: COLORS.grey, borderBottomColor: 'white'}}
              />
            </View>
          </View>
        </View>
        <ListCategories />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
})

export default HomeScreen

