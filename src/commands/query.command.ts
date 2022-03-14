import {CommandContext} from '../interfaces';

export function QueryCommand<TNext>(this: CommandContext<TNext>): string {
    return this.context.value;
}
