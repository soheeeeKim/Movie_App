import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { QueryCache, useMutation, useQuery, useQueryClient } from "react-query";
import { Record } from "../interfaces";

const useTodoList = () =>{
    const {data, isLoading, isSuccess, isError} = useQuery("todo-list",()=>
    {return axios.get("/api/todo")}
    );
    console.log(data);
    const queryClient = useQueryClient();
    const refresh = ()=>{
        queryClient.invalidateQueries("todo-list");
    }
    const createMutation = useMutation(()=>{
        return axios.post("/api/todo",{
            fields:{
                Name:"새 Todo",
                Done: false,
            }
        })
    },{
        onSuccess: ()=>{
            refresh();
        }
    })

    const deleteMutation = useMutation((id: string)=>{
        return axios.delete("/api/todo?id="+id)
    },{
        onSuccess: ()=>{
            refresh();
        }
    })

    const updateMutation = useMutation((record:Record)=>{
        return axios.patch("/api/todo?id="+record.id, record)
    },{
        onSuccess: ()=>{
            refresh();
        }
    })
    const doFiltering = useRecoilValue(d)
    return {
        todoList: data ? (data.data.records as Record[]) : [],
        addNewTodo: createMutation.mutate,
        updateTodo: updateMutation.mutate,
        deleteTodo: deleteMutation.mutate,
        isLoading: isLoading,

    };
}
export default useTodoList;