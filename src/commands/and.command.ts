import {CommandContext} from '../interfaces';

export function AndCommand<TNext>(this: CommandContext<TNext>, expression: string): TNext {
    this.context.value += `AND ${expression} `;

    return this.next;
}
