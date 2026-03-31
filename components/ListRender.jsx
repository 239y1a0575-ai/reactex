function ListRender() {
    const items = ["Apple", "Banana", "Orange"];

    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default ListRender;