import {CommandContext} from '../interfaces';

export function LimitCommand<TNext>(this: CommandContext<TNext>, limit: number): TNext {
    this.context.value += `LIMIT ${limit} `;

    return this.next;
}
