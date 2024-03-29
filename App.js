import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = title => setTodos(prev => [
    ...prev,
    {
      id: Date.now().toString(),
      title,
    }
  ])

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title='Todo App!'/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}></Todo>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
