// require('dotenv').config({ path: '../../.env' })

// export default async ( _, res) => {
//     const API_KEY = process.env.BUTTONDOWN_API_KEY;
//     console.log(API_KEY)

//     const response = await fetch (
//         `https://api.buttondown.email/v1/subscribers`,
//         {
//             headers:{
//                 Authorization: `Token ${API_KEY}`,
//                 'Content-Type' :  'application/json'
//             },
//             method:'GET'
//         }
//     );

//     const { count } = await response.json();
//     console.log(count, 'count')

//     res.setHeader(
//         'Cache-Control',
//         'public, s-maxage=1200, stale-while-revalidate=600'
//     );

//     return res.status(200).json({ count });



// }


export default async (req, res) => {
    const { email } = req.body;

    if(!email){
        return res.status(400).json({error: 'Email is required'});
    }

    try{
        const API_KEY = process.env.BUTTONDOWN_API_KEY;
        const response = await fetch (
            `https://api.buttondown.email/v1/subscribers`,
            {
                body: JSON.stringify({
                    email,
                    tags:['darmo.pro']
                }),
                headers:{
                    Authorization: `Token ${API_KEY}`,
                    'Content-Type' :  'application/json'
                },
                method:'POST'
            }
        );

        if(response.status >= 400){
            const text = await response.text()

            if(text.includes('already subscribed')){
                return res.status(400).json({
                    error: `You're already suscribed to my mailing list`
                });
            }

            return res.status(400).json({
                error: text
            });
        }
        return res.status(201).json({ error: '' });
    }catch(error){
        return res.status(500).json({
            error: error.message || error.toString()
        })

    }
}