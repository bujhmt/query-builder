export type Command<
    TNext,
    TParams extends Array<any> = Array<any>,
    > = (...args: TParams) => TNext;
