import {CommandContext} from '../interfaces';

export function FromCommand<TNext>(this: CommandContext<TNext>, table: string): TNext {
    this.context.value += `FROM ${table} `;

    return this.next;
}
