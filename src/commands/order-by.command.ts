import {CommandContext} from '../interfaces';

export function OrderByCommand<TNext>(this: CommandContext<TNext>, value: string | string[]): TNext {
    this.context.value += `ORDER BY ${Array.isArray(value) ? value.join(', ') : value} `;

    return this.next;
}
