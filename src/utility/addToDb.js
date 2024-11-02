// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // toast.warning("Warning! This book is already in your read list.", {
        //     position: "top-left",
        // });
        alert('Warning! This book is already in your read list.')
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        // toast.success("This book is added to your read list.", {
        //     position: "top-center",
        // });
        alert('This book is added to your read list.')
    }
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.info("This book is already in your wishlist.", {
            position: "top-right",
        });
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success("Congrats! This book has been added to your wishlist.", {
            position: "bottom-right",
        });
    }
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };
