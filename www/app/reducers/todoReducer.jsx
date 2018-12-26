const initState = {
  display: 'ALL',
  todo: [
    {id: 1, title: '吃饭', done: false, status: 1},
    {id: 2, title: '睡觉', done: false, status: 1},
    {id: 3, title: '学习', done: true, status: 1}
  ]
}

export default (state = initState, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: state.todo.reduce((prev, cur) => cur.id > prev ? cur.id : prev, 0)+1,
            title: action.value,
            done: false,
            status: 1
          }
        ]
      }
    case 'DEL':
      state.todo.filter((item, index) => {
        if (item.id === action.id) state.todo.splice(index, 1);
      })
      return {
        ...state,
        todo: [
          ...state.todo
        ]
      }
    case 'EDIT':
      state.todo.filter(item => {
        item.id === action.id ? item.status = 0 : item.status
      })
      return {
        ...state,
        todo: [
          ...state.todo
        ]
      }
    case 'UPDATE':
      state.todo.filter(item => {
        item.id === action.id ? item.title = action.value : item.title;
      })
      return {
        ...state,
        todo: [
          ...state.todo
        ]
      }
    case 'KEYUP':
      state.todo.filter(item => {
        item.id === action.id && action.code === 13
        ? item.status = 1 : item.status;
      })
      return {
        ...state,
        todo: [
          ...state.todo
        ]
      }
    case 'CHECKED':
      state.todo.filter(item => {
        item.id === action.id ? item.done = !item.done : item.done
      })
      return {
        ...state,
        todo: [
          ...state.todo
        ]
      }  
    case 'READ':
      return {
        ...state,
        display: action.display
      }
    default: 
      return state;
  }
}