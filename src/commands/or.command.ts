import {CommandContext} from '../interfaces';

export function OrCommand<TNext>(this: CommandContext<TNext>, expression: string): TNext {
    this.context.value += `OR ${expression} `;

    return this.next;
}
