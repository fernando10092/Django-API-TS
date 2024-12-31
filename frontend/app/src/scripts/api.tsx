const chamada = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);

    var data = {
        name: formData.get('nomehtml'),
        email: formData.get('emailhtml'),
        message: formData.get('msghtml')
    }
    try {
        console.log("Entrei no Try")
        const response = await fetch("http://127.0.0.1:8000/api/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if(response.ok){
            console.log("response.json")
        }
    } catch (e) {
        console.log(e)
    }
}

export default chamada;