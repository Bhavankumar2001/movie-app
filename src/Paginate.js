import _ from 'lodash';



export function Paginate(items, pageNumber, pageSize){

    const startIndex = (pageNumber -1) * pageSize
    console.log(`Myitems: ${items}`)
    console.log(`MyPageNumber: ${pageNumber}`)
    console.log(`Start Index: ${startIndex}`)
    // Function Chain - Functional Programming
    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

}