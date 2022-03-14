# Query Builder
Simple query builder without connection to any databases

## Example

```typescript
import {QueryBuilder} from './query-builder';

const result = QueryBuilder()
    .select('name')
    .from('Students')
    .where('age > 14')
    .and('name = "John"')
    .orderBy('age')
    .limit(5)
    .offset(2)
    .query();

console.log(result);
```

Result:
```console
SELECT name FROM Students WHERE age > 14 AND name = "John" ORDER BY age LIMIT 5 OFFSET 2 
```
