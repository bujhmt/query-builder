export interface Context {
    value: string;
}

export interface CommandContext<TNext> {
    context: Context;
    next: TNext;
}
