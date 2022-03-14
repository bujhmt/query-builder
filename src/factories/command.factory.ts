import {Context} from '../interfaces';
import {Command} from '../types';

export function CommandFactory<
    TNext,
    TCommand extends Command<TNext>,
    >(
        targetCommand: TCommand,
        context: Context,
        next?: TNext,
): Command<TNext, Parameters<TCommand>> {
    return targetCommand.bind({context, next});
}
