import { useEffect, useState } from "react";



const parseJSON = (resp) => (resp.json ? resp.json() : resp);

const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }

    return parseJSON(resp).then((resp) => {
        throw resp;
    });
};


const useApi = (API_URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api${API_URL}`,
            {
                // headers: { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOCKEN}` },
                method: "GET"
            })
            .then(checkStatus)
            .then(parseJSON)
            .then(({ data }) => {
                setData(data);
                setLoading(false);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`);
            });
    }, [API_URL]);

    return { data, loading };
};

export default useApi;
