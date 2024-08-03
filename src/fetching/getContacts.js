export const getContacts = async () =>{
    const response = await fetch(
        "/MOOK.json",
        {method: "GET"}
    )

    return response.json()
}
