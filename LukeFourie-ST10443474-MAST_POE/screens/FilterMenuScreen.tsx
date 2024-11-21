// screens/FilterMenuScreen.tsx 
import React, { useState, useEffect } from 'react'; 
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { RootStackParamList } from '../types'; 

// Define a type for the menu item 
type MenuItem = { 
  id: string; 
  dishName: string; 
  description: string; 
  price: number; 
  course: string; 
}; 

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>; 

export default function FilterMenuScreen({ route, navigation }: FilterMenuScreenProps) { 
  // Extract menuItems from route.params with a default empty array 
  const menuItems: MenuItem[] = route.params?.menuItems || []; 
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems); 

  // Set initial filtered items using useEffect 
  useEffect(() => { 
    setFilteredItems(menuItems); 
  }, [menuItems]); 

  // Filter by course type 
  const filterByCourse = (course: string) => { 
    setFilteredItems(menuItems.filter(item => item.course === course)); 

  }; 

  return ( 

    <View style={styles.container}> 
      <Text style={styles.title}>Menu</Text> 
      <Button title="Appetizers" onPress={() => filterByCourse('Appetizer')} accessibilityLabel="Appetizers" /> 
      <Button title="Mains" onPress={() => filterByCourse('Main')} accessibilityLabel="Mains" /> 
      <Button title="Desserts" onPress={() => filterByCourse('Dessert')} accessibilityLabel="Desserts" /> 
      <Button title="Clear Menu" onPress={() => setFilteredItems(menuItems)} accessibilityLabel="Clear Menu" /> 


      <FlatList 
        data={filteredItems} 
        keyExtractor={(item) => item.id} // Changed from index to item.id for better performance 
        renderItem={({ item }) => ( 
          <View style={styles.menuItem}> 
            <Text style={styles.dishName}>{item.dishName} - {item.course}</Text> 
            <Text>{item.description}</Text> 
            <Text>${item.price.toFixed(2)}</Text> 
          </View> 
        )} 
      /> 
    </View> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#9999CC',
  }, 

  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    color: '#9933CC',
  }, 

  menuItem: { 
    borderBottomWidth: 1, 
    paddingVertical: 10, 
    width: '100%', 
  }, 

  dishName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#9933CC',
  }, 

}); 

