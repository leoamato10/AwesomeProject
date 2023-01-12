// import { createMachine } from 'xstate';

// const fetchMachine = createMachine({
//     id: 'fetch',
//     initial: 'idle',
//     context: {
//         data: undefined,
//         error: undefined
//     },
//     states: {
//         idle: {
//             on: { FETCH: 'loading' }
//         },
//         loading: {
//             invoke: {
//                 src: 'fetchData',
//                 onDone: {
//                     target: 'success',
//                     actions: assign({
//                         data: (_, event) => event.data
//                     })
//                 },
//                 onError: {
//                     target: 'failure',
//                     actions: assign({
//                         error: (_, event) => event.data
//                     })
//                 }
//             }
//         },
//         success: {
//             entry: 'notifySuccess',
//             type: 'final'
//         },
//         failure: {
//             on: {
//                 RETRY: 'loading'
//             }
//         }
//     }
// });

// const Fetcher = ({ onResolve }) => {
//     const [state, send] = useMachine(fetchMachine, {
//         actions: {
//             notifySuccess: (ctx) => onResolve(ctx.data)
//         },
//         services: {
//             fetchData: (_, e) =>
//                 fetch(`https://jsonplaceholder.typicode.com/todos/1`).then((res) => res.json())
//         }
//     });

//     switch (state.value) {
//         case 'idle':
//             return (
//                 <button onClick={() => send({ type: 'FETCH', query: 'something' })}>
//                     Search for something
//                 </button>
//             );
//         case 'loading':
//             return <div>Searching...</div>;
//         case 'success':
//             return <div>Success! Data: {state.context.data}</div>;
//         case 'failure':
//             return (
//                 <>
//                     <p>{state.context.error.message}</p>
//                     <button onClick={() => send('RETRY')}>Retry</button>
//                 </>
//             );
//         default:
//             return null;
//     }
// };