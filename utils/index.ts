
export async function fetchCars()
{
    const headers =
     {
        'X-RapidAPI-Key': '013f606c71msh841ed8c079609c2p17668ejsnecd77a90188a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers
    });

    const result = await response.json();

    return result;
}

