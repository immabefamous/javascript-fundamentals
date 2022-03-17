let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathroom: 3, 
    windows: 0,
    rent: 4500,
    unit: '1A',
    tenants: [],
}
    
let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathroom: 1, 
    windows: 2,
    rent: 1500,
    unit: '1B',
    tenants: [],
}

let apt3 = {
    bedrooms: 2, 
    sqft: 53, 
    bathroom: 3, 
    windows: 2,
    rent: 2400,
    unit: '1C',
    tenants: [],
}

let apt4 = {
    bedrooms: 2, 
    sqft: 53, 
    bathroom: 3, 
    windows: 2,
    rent: 2400,
    unit: '1C',
    tenant1: [],
}

let tenant1 = {
    name: 'John Doe',
    creditScore:400,
    salary: 1500,
    age: 30,
}

let tenant2 = {
    name: 'John Doe',
    creditScore:800,
    salary: 22000,
    age: 33,
}

let building = {
    streetAddress: '74 N 7th street, booklyn 11249',
    laundry: false,
    allowsPets: false,
    lease: function (apt, tenant) {
        if (apt.tenants.length === apt.bedrooms) {
            return `${apt.unit} is already full!`
        }
        apt.tenants.push(tenant)
        console.log(tenant.name , 'has reted out', apt.unit)
    },
    apartments: [apt1, apt2, apt3],
}

//builing.apartments.forEach()