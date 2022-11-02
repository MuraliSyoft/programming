function occuredElem(str) {
    const map = {}
    str.split("").forEach(ele => {
        map[ele] = map[ele] ? map[ele] + 1 : 1
        
    })

    let max = 1;
    let char;
    for (let i in map) {
        if (map[i] > max) {
            max = map[i]
            char = i
        }
    }
    console.log(`character ${char} occured ${max} times`)
}
occuredElem("Hnmmmmmmmmmmmmmm7777777777777777777777d")
