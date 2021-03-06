import React from 'react'
import { 
  ImageBackground, 
  FlatList, 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Dimensions,
  TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'
import places from '../../consts/places'
const { width } = Dimensions.get('screen')

const HomeScreen = ({navigation}) => {
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

  
  const ListCards = () => {
    return (
      places.map((place) => (
        <TouchableOpacity 
          key={place.id} 
          activeOpacity={0.8} 
          onPress={() => navigation.navigate('DetailsScreen', place)}>
          <ImageBackground style={styles.cardImage} source={place.image} >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}
            >
              {place.name}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'flex-end'
              }}
            >
              <View style={{flexDirection: 'row'}}>
                <Icon name='place' size={20} color={COLORS.white} />
                <Text style={{marginLeft: 5, color: COLORS.white}}>
                  {place.location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name='star' size={20} color={COLORS.white} />
                <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
              </View>
            </View>

          </ImageBackground>
        </TouchableOpacity>
      ))
    )
  }

  const RecommendedCard = () => {
    return (places.map( place => (
      <ImageBackground style={styles.rmCardImage} source={place.image} key={place.id}>
        <Text 
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10
          }}
        >{place.name}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end'
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            {/* location */}
            <View style={{flexDirection: 'row'}}>
              <Icon name='place' size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>{place.location}</Text>
            </View>
            {/* start */}
            <View style={{flexDirection: 'row'}}>
              <Icon name='star' size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: COLORS.white, fontSize: 13}}>{place.details}</Text>
        </View>
      </ImageBackground>
      ))
    )
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
                style={{color: COLORS.grey, borderBottomColor: 'white', }}
              />
            </View>
          </View>
        </View>
        
        <ListCategories />

        <Text style={styles.sectionTitle}>Places</Text>

        <View>
          <FlatList 
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={ListCards}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={RecommendedCard}
          />
        </View>
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
    elevation: 12,
    borderRadius: 8
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
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  cardImage: {
    height: 220, 
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 8
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight:  20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10
  }
})

export default HomeScreen

