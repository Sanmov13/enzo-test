import { FC, useCallback, useState } from 'react';
import { IProducts } from '../../../interfaces/interface';
import Modal from '../Modal/Modal';
import styles from './SingleItem.module.scss';

interface IProps {
    item: IProducts,
}

const SingleItem: FC<IProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, []);

    return (
        <>
            {isOpen && (
                <Modal onClose={onClose} data={item} />
            )}
            <div className={styles.listItems}>
                <span className={styles.nameItem}>{item.name}</span>
                <div>
                    {
                        item.active
                            ? <span className={styles.info}>Active</span>
                            : <span>Non-Active</span>
                    }
                    <span className={styles.date}>{item.createdAt}</span>
                </div>
                <button onClick={() => onOpen()} className={styles.btn}>
                    Edit
                </button>
            </div>
        </>
    );
};

export default SingleItem;