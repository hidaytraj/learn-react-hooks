import { useEffect, useState } from "react";

export const useMatchFetch = (url) => {
    console.log(' url ', url);
    const [loading, toggleLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [err, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json()

            })
            .then((result) => {
                console.log(' data ', result);

                setResult(result);
                toggleLoading(false);
            })
            .catch((error) => {
                setError(error);
                toggleLoading(false);
            });

    }, [url])

    return ({ pending, error, data }) => {
        if(loading) {
            return pending();
        } else if(err) {
            return error(err);
        } else if(result) {
            return data(result);
        }
        return null;
    };
}