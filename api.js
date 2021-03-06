
let div = document.getElementById('container')

const request = async () => {
    let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json')
    let res = await req.json()
    console.log('Response', res)
    res.forEach((element) => {
        console.log(element)
        let img = document.createElement('img')
        let button = document.createElement('button')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        h3.innerText = element.company_name
        h4.innerText = `Vacancies: ${element.vacancies}`
        button.innerText = `Rent Building ${element.id}`
        button.addEventListener('click', () => {
            let updatedVacancies = --element.vacancies
            if (updatedVacancies <=-1) return alert('NO MORE VACANCIES');
            h4.innerText = `Vacancies: ${updatedVacancies}`
        })
        img.setAttribute('src', element.photo)
        div.append(h3, h4, img, button)
    })
}
request()