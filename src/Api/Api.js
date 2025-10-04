
const fetchData = async (url) => {
    const apiEndPoints = import.meta.env.VITE_APP_API_KEY;
    try {
        const response = await fetch(`${apiEndPoints}${url} `)
        const data = await response.json();
        if (!data.success) {
            return data?.message;
        }
        return data?.data;
    } catch (error) {
        // console.log("throw", error);
        throw error;
    }

}


export default fetchData;