import { useState } from "react";

const useList = () => {

    const [list, setList] = useState([]);
    const push = (value) => {
        setList([...list, value]);
    };

    const pull = (index) => {
        const newList = list.filter((listItem, listIndex) => {
            return listIndex !== index;
        });

        setList(newList);
    };

    return {
        list: list,
        push,
        pull
    }
}

export default useList;