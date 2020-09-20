import {sum, mult} from "./01";

test ('sum should be correct ',() => {
    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = sum(a,b)
    const result2 = sum(a,c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(4)
})

test ('mult should be correct ',() => {
    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = mult(a,b)
    const result2 = mult(a,c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(3)
})