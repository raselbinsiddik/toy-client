import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- The Childrens Toy`;
    },[title])
};
export default useTitle;