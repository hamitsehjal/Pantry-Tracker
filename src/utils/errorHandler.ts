// // Global Error Handler
// type AsyncFunction = (...args: any[]) => Promise<T>;
//
// export function handleAsyncError(fn: AsyncFunction): AsyncFunction {
//   return async  (...args: any[]) {
//     try {
//       await fn(...args);
//     } catch (error) {
//       console.log(`An error occurred: ${error}`);
//     }
//   };
// }
