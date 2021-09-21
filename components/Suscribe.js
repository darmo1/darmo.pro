import * as React from 'react'

const Suscribe = () => {

    const [form, setForm] = React.useState(false)
    const emailRef = React.useRef(null);

    const suscribeNewsletter = async (e) => {
        e.preventDefault();
        setForm({ state: 'loading'});
        

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: emailRef.current.value
            }),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST'
        })

        const { error } = await res.json();
        if(error){
            setForm({
                state: 'error',
                message: error
            });
            return
        }

        emailRef.current.value = '';
        setForm({
        state: 'success',
        message: `🎉🎉! You're now on the list.`
    });
    }



    return (
        <div className=" w-1/2 rounded border p-4  m-auto my-3">
            <p className="font-bold text-xl text-gray-700 mb-1">Suscribe to the newsletter</p>
            <p>Thank you for coming here. 
                If you subscribe to my newsletter you will get emails 
                related to matters such as tech, materials science, 
                and any kind of stuff what I am experimenting with and 
                studying. <br /> <b> Get suscribe! </b>
            </p>
            <form className="mt-4 " onSubmit={suscribeNewsletter}>
                <input 
                type="email"
                ref={emailRef}
                placeholder="Write you email here"
                aria-label="Email for newsletter"
                autoComplete="email"
                required={true}
                className="px-2 py-1 w-1/2 border"

                />
                <button 
                type="submit"
                className="bg-blue-200 px-6 rounded py-1 ">
                    {
                        form.state === 'loading' ? 'cargando' : 'Suscribe'
                    }
                </button>
                {
                    form.state === 'error' 
                    ? <p className="font-bold text-sm mt-2">{form.message}</p> 
                    : form.state === 'success'
                        ? <p className="font-bold text-sm mt-2">{form.message}</p>
                        :<p className="font-bold text-xs mt-2">Go ahead</p>

                }
            </form>
        </div>
    )
}

export default Suscribe
 