import { FC, useState } from 'react';
import { IProducts } from '../../../interfaces/interface';
import { Products } from '../../utils/data';
import styles from './Modal.module.scss';

interface IProps {
    onClose: () => void,
    data: IProducts,
}

const Modal: FC<IProps> = ({ onClose, data }) => {
    const [editOrder, setEditOrder] = useState(data.name);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditOrder(e.target.value);
    }

    const handleEdit = (e: any, id: number) => {
        e.preventDefault();

        Products.map((elem: IProducts) => {
            if (elem.id === id) {
                elem.name = editOrder
            }
        })
        onClose();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.ExitBtn}>
                    <h3>Edit</h3>
                    <button onClick={onClose}>✖</button>
                </div>
                <div className={styles.divInput}>
                    <label htmlFor="">Name</label>
                    <input value={editOrder} onChange={onHandleChange} placeholder='Enter text...' />
                </div>
                <div className={styles.divBtn}>
                    <button onClick={(e) => handleEdit(e, data.id)}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;