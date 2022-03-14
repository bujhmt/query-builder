import {CommandContext} from '../interfaces';

export function OffsetCommand<TNext>(this: CommandContext<TNext>, limit: number): TNext {
    this.context.value += `OFFSET ${limit} `;

    return this.next;
}
