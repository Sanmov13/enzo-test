import { useState } from 'react';
import { Products } from '../../utils/data';
import Select from '../../components/Select/Select';
import SingleItem from '../../components/SingleItem/SingleItem';
import styles from './ListItem.module.scss'

const ListItem = () => {
    const [input, setInput] = useState('');
    const [selectedSort, setSelectedSort] = useState("");
    const [product, setProduct] = useState(Products);

    const sortProducts = (sort: string) => {
        setSelectedSort(sort);
        if (sort === "min") {
            setProduct([...product].sort((a, b) => a!.name!.length - b!.name!.length))
        }
        if (sort === "max") {
            setProduct([...product].sort((a, b) => b!.name!.length - a!.name!.length))
        }
    };

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    // сделал поиск по имени 
    const searching = product.filter((elem) => {
        return elem!.name!.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    })

    return (
        <>
            <header className={styles.contain}>
                <div className={styles.container}>
                    <input type="text" placeholder='Search' value={input} onChange={onHandleChange} />
                    <Select
                        defaultValue={"Фильтр"}
                        options={[
                            { value: "max", name: "По убыванию" },
                            { value: "min", name: "По возрастанию" },
                        ]}
                        value={selectedSort}
                        onChange={sortProducts}
                    />
                </div>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    <h3>Name</h3>
                    <div>
                        <h3>Status</h3>
                        <h3>Created</h3>
                    </div>
                </div>
                {
                    searching.map((elem) => {
                        return <SingleItem item={elem} key={elem.id}/>
                    })
                }
            </div>
        </>
    );
};

export default ListItem;