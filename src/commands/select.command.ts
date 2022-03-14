import {CommandContext} from '../interfaces';

export function SelectCommand<TNext>(this: CommandContext<TNext>, value: string[] | string = '*'): TNext {
    this.context.value += 'SELECT ';
    this.context.value += `${Array.isArray(value) ? value.join(', ') : value} `;

    return this.next;
}
