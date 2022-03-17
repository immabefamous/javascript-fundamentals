let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathroom: 3, 
    windows: 0,
    rent: 4500,
    unit: '1A'}
    
let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathroom: 1, 
    windows: 2,
    rent: 1500,
    unit: '1B'
}

let apt3 = {
    bedrooms: 2, 
    sqft: 53, 
    bathroom: 3, 
    windows: 2,
    rent: 2400,
    unit: '1C'
}


let building = {
    streetAddress: '74 N 7th street, booklyn 11249',
    laundry: false,
    allowsPets: false,
    apartments: [apt1, apt2, apt3]
}

//builing.apartments.forEach()