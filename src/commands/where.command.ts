import {CommandContext} from '../interfaces';

export function WhereCommand<TNext>(this: CommandContext<TNext>, expression: string): TNext {
    this.context.value += `WHERE ${expression} `;

    return this.next;
}
