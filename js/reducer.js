// We want our reducer to be able to manage our state. We will comment out our state being assigned to th object.
//let state = {count: 0};


//here we just declaring state INSTEAD of assigning it. It will start off as undefined.
let state;

//  Then here, in changeState, we are setting our state to a default argument of {count:0}
function changeState(state ={count:0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}
 // This will make it so anytime the page is loaded it starts off with 0.
 //This is the default of our switch case being activated. Returning the default state if action.type isnt 'INCREASE_COUNT'
dispatch({ type: '@@INIT' }) 