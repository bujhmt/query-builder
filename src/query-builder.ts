import {CommandFactory, ContextFactory} from './factories';
import {
    AndCommand,
    FromCommand,
    LimitCommand,
    OffsetCommand,
    OrCommand,
    OrderByCommand,
    QueryCommand,
    SelectCommand,
    WhereCommand,
} from './commands'

export function QueryBuilder() {
    const context = ContextFactory();

    // Last
    const query = CommandFactory<string, typeof QueryCommand>(QueryCommand, context);

    // Circular
    const circularOffset = CommandFactory(OffsetCommand, context, {query});
    const circularLimit = CommandFactory(LimitCommand, context, {query});
    const circularAnd = CommandFactory(AndCommand, context, {query});
    const circularOr = CommandFactory(OrCommand, context, {query});

    // Primary
    const offset = CommandFactory(OffsetCommand, context, {query, limit: circularLimit});
    const limit = CommandFactory(LimitCommand, context, {query, offset: circularOffset});
    const orderBy = CommandFactory(OrderByCommand, context, {query, limit, offset});
    const or = CommandFactory(OrCommand, context, {orderBy, limit, offset, query, and: circularAnd});
    const and = CommandFactory(AndCommand, context, {orderBy, limit, offset, query, or: circularOr});
    const where = CommandFactory(WhereCommand, context, {and, or, orderBy, limit, offset, query});
    const from = CommandFactory(FromCommand, context, {where, orderBy, limit, offset, query});
    const select = CommandFactory(SelectCommand, context, {from});

    return {
        select,
    };
}
