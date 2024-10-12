import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ExpensesScreen: React.FC = () => {
  const [expenses, setExpenses] = useState([
    { id: '1', name: 'Groceries', amount: 50 },
    { id: '2', name: 'Electricity Bill', amount: 100 },
    { id: '3', name: 'Internet', amount: 60 },
  ]);

  const addExpense = () => {
    // For now, let's add a static expense item. You can extend this later with a form.
    const newExpense = { id: Math.random().toString(), name: 'New Expense', amount: 75 };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.name}</Text>
            <Text>${item.amount}</Text>
          </View>
        )}
      />
      <Button title="Add New Expense" onPress={addExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});

export default ExpensesScreen;
