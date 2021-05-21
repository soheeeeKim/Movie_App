import React from "react"
import { Button, Checkbox, Editable, EditableInput, EditablePreview } from "@chakra-ui/react"
import useTodoList from "../hooks/useTodoList"
import produce from "immer"
import {counterState} from "../store";
import {useRecoilState} from "recoil";
import { Record } from "../interfaces";
import _ from "lodash"
const Test = () => {
  const { todoList, addNewTodo, updateTodo, deleteTodo } = useTodoList()
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div>
        {todoList.map((todo) => {
            const debouncingInput = _.debounce(
               (todo: Record, nextValue: string)=>{
                const newTodo = produce(todo, (nextTodo) => {
                    nextTodo.fields.Name = nextValue;
                    })
                    updateTodo(newTodo)
               }
            )
            
            return (
            <div key={todo.id + "/" + todo.fields.Name + "/" + todo.fields.Done}>
            <Checkbox
            defaultChecked={todo.fields.Done === true}
            onChange={(e) => {
                const checked = e.target.checked

                const newTodo = produce(todo, (nextTodo) => {
                nextTodo.fields.Done = checked
                })
                updateTodo(newTodo)
            }}
            ></Checkbox>

            <Editable
            defaultValue={todo.fields.Name}
            onChange={(nextValue) => {
                const newTodo = produce(todo, (nextTodo) => {
                nextTodo.fields.Name = nextValue
                })
                updateTodo(newTodo)
            }}
            >
            <EditablePreview></EditablePreview>
            <EditableInput></EditableInput>
            </Editable>
            <Button
            size={"xs"}
            onClick={() => {
                deleteTodo(todo.id)
            }}
            >
            삭제
            </Button>
        </div>
        ))}
        <Button
        onClick={() => {
            addNewTodo()
        }}
        >
        button
        </Button>
}</div>
    )}
    


export default Test
