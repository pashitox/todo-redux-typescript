import  store  from './store';
import { todosActions } from "../redux/todoSlicer";

test('Updates a text and time', () => {
    let state = store.getState().todoItems;
    const unchangedtodo = state.find((todo) => todo.id === '1');
    expect(unchangedtodo?.text).toBe('cusco');
    expect(unchangedtodo?.time).toBe('2021/01/12');
    expect(unchangedtodo?.completed).toBe(false);
  
    store.dispatch(todosActions.edit({ id: '1', text: 'el rey', time: '2021/21/24', completed: true }));
    state = store.getState().todoItems;
    let changetodo = state.find((todo) => todo.id === '1');
    expect(changetodo?.text).toBe('el rey');
    expect(changetodo?.time).toBe('2021/21/24');
    expect(changetodo?.completed).toBe(true);
  
  
    store.dispatch(
        todosActions.edit({id: '1', text: 'cusco', time: '2021/01/12', completed:false })
    );
    state = store.getState().todoItems;
    const backToUnchangedtodo = state.find((todo) => todo.id === '1');
  
    expect(backToUnchangedtodo).toEqual(unchangedtodo);
  });

test('Deletes a text from list with id', () => {
    let state = store.getState().todoItems;
    const initialTextCount = state.length  
       // const id = "1"
    store.dispatch(todosActions.remove({id:"1"}));
    state = store.getState().todoItems;
  
    expect(state.length).toBeLessThan(initialTextCount); })


test('Adds a new text', () => {
        let state = store.getState().todoItems;
        const initialtodoCount = state.length;
      
        store.dispatch(
            todosActions.addItem({ id: '1', text:'juan', time:'2020/08/08', completed:true})
        );
        state = store.getState().todoItems;
        const newlyAddedTodo = state.find((todo) => todo.id === '1');
        expect(newlyAddedTodo?.text).toBe('juan');
        expect(newlyAddedTodo?.time).toBe('2020/08/08');
        expect(newlyAddedTodo?.completed).toBe(true);
        expect(state.length).toBeGreaterThan(initialtodoCount);
      });   


