// Global Error Handler
type AsyncFunction<Type> = (...args: any[]) => Promise<Type>;

function withErrorHandler<Type>(fn: AsyncFunction<Type>): AsyncFunction<Type> {
  return async (...args: any[]): Promise<Type> => {
    try {
      return await fn(...args);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
